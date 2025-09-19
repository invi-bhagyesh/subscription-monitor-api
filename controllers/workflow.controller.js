import { createRequire} from 'module';
const require = createRequire(import.meta.url);
const { serve } = require("@upstash/workflow/express");
import dayjs from 'dayjs';
import Subscription from '../models/subscription.model.js';
import {sendReminderEmail} from "../utils/send-email.js";

const REMINDERS = [7,5,2,1];

export const sendReminders = serve(async (context) => {
    const { subscriptionId } = context.requestPayload;
    const subscription = await fetchSubscription(context, subscriptionId);

    if (!subscription || subscription.status != 'active') {
        return;
    }
    const renewalDate = dayjs(subscription.renewalDate);
    if (renewalDate.isBefore(dayjs())) {
        console.log(`Renewal data has passed  for subscription ${subscriptionId}. Stoppping Workflow`);
        return;
    }
    for (const daysBefore of REMINDERS){
        const reminderDate = renewalDate.subtract(daysBefore, 'days');
        //renewal datae: 22feb, reminder date: 15feb,17feb,20feb,21feb

        if (reminderDate.isAfter(dayjs())) {
            await sleepUntilReminder(context, `${daysBefore} days before reminder`, reminderDate);
        }
        if (dayjs().isSame(reminderDate, 'day')){
            await triggerReminder(context, `${daysBefore} days after reminder`, subscription);
        }

    }
});

const fetchSubscription = async (context, subscriptionId) => {
    return await context.run('get subscription', async() =>{
        return Subscription.findbyId(subscriptionId).populate('user', 'name email');
    });
};

const sleepUntilReminder = async (context, label, date) => {
    console.log(`Sleeping until ${label} reminder at ${date}`);
    await sleepUntil(label,date.toDate());
}

const triggerReminder = async (context, label, subscription) => {
    return await context.run(label, async ()=>{
        console.log(`Triggering reminder at ${label} reminder at ${date}`);
        //send emails, alerts or custom logic

        await sendReminderEmail({
            to: subscription.user.email,
            type: label,
            subscription,

        })

    })
}