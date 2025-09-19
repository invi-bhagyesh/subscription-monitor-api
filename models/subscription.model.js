import mongoose from 'mongoose';

const subscriptionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 50
    },
    price: {
        type: Number,
        required: [true,"Subscription is required"],
        min:[0, 'Price must be a positive integer'],
        max:[1000, 'Price must be less than 1000'],
    },
    currency: {
        type: String,
        enum: ['EUR', 'USD'],
        default: 'USD',
    },
    frequency: {
        type: String,
        enum: ["daily", "weekly", "monthly"],
    },
    category: {
        type: String,
        enum: ["Sports", "Music", "LifeStyle", "Politics", "Finance"],
        required: true,
    },
    paymentMethod: {
        type: String,
        required: true,
        trim: true,
    },
    status: {
        type: String,
        enum: ["PENDING", "EXPIRED", "active"],
        default: 'active',
    },
    startDate:{
        type: Date,
        required: true,
        validate: {
            validator: (value) => value<= new Date(),
            message: 'Start date must be in past',
        }
    },
    renewalDate:{
        type: Date,
        required: true,
        validate: {
            validator: function (value){
               return  value > this.startDate;
            },
            message: 'End date must be in future',
        }
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true,
    }

}, { timestamps: true });

//auto calculate renewal date if missing
subscriptionSchema.pre('save',function(next){
    if (!this.renewalDate){
        const renewalPeriods = {
            daily:1,
            weekly:7,
            monthly:30,
            yearly:365,
        };
        this.renewalDate = new Date(this.startDate);
        this.renewalDate.setDate(this.renewalDate.getDate()+renewalPeriods[this.frequency]);
    }
    if (this.renewalDate < new Date()){
        this.status = "EXPIRED";
    }
    next();
})

const Subscription = mongoose.model("Subscription", subscriptionSchema);

export default Subscription;