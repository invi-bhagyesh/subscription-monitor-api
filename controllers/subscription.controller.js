import Subscription from "../models/subscription.model.js";
import {workflowClient} from "../config/upstash.js";

export const createSubscription = async (req, res,next) => {
    try {
    const subscription  = await Subscription.create({
        ...req.body,
        user: req.user._id,
    });
    await workflowClient.trigger({
        url: `${SERVER_URL}/api/v1/workflow/subscription/reminder`,
        body:{
            subscriptionId,
        },
        headers:{
            contentType: "application/json",
        },
        retries:0,
        })

    res.status(200).json({success:true, data:subscription});
    }catch(err){
        next(err);
    }
}

export const getUserSubscriptions = async (req, res, next) => {
    try{
        //if user id is same as the one in token
        if(req.user!=req.params.id){
            const error = new Error('You are not authorized');
            error.status = 401;
            throw error;
        }

        const subscriptions = await Subscription.find({user:req.params.id});
        res.status(200).json({success:true, data:subscriptions});
    }catch(err){
        next(err);
    }
}