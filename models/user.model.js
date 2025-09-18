import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Username is required"],
        trim: true,
        minLength: 2,
        maxLength: 50,
},
    email:
{
    type: String,
    required: [true, "User Email is required"],
    trim: true,
    unique: true,
    minLength: 5,
    maxLength: 255,
    match: [/\S+@\S+\.\S+/,"Please specify a valid email address"],
},
    password: {
        type: String,
        required: [true, "Password is required"],
        minLength: 6,
        maxLength: 255,
    }

}, {timestamps: true});


const User = mongoose.model("User", userSchema);
export default User;

//{name: "INVI", email: "invi@gmail.com", password: "password"}