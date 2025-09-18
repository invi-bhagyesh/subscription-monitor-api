import mongoose from 'mongoose'
import { DB_URL, NODE_ENV} from "../config/env.js";

if (!DB_URL) {
    throw new Error("Please provide DB_URL inside .env<development/production>.local");
}

const connectToDatabase = async () => {
    try{
        await mongoose.connect(DB_URL);
        console.log(`Connected to database in ${NODE_ENV}`);
    }
    catch(err){
        console.error("Error connecting to database", err);
        process.exit(1);
    }
}
export default connectToDatabase;