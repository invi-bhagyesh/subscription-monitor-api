import {JWT_SECRET} from "../config/env.js";
import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

// someone is making a request  to get user details -> authorize middle -> verify -> if valid -> get user details
const authorize  = async (req,res)=>{
    try{
        let token;
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(' ')[1];
        }

        if(!token)return res.status(401).json({error: 'Unauthorized'});
        const decoded = jwt.verify(token, JWT_SECRET)

        const user = await User.findById(decoded.id);
        if (!user) return res.status(401).json({error: 'Unauthorized'});

        req.user = user;
        next();

    }catch(err){
        res.status(401).json({message: 'Unauthorized', error:err.message});
    }
}

export default authorize;