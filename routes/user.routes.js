import { Router } from "express";
import {getUsers, getUser} from "../controllers/user.controller.js";
import authorize from '../middlewares/auth.middleware.js';

const userRouter = Router();

userRouter.get('/',getUsers);
userRouter.get('/:id', authorize ,getUser);
userRouter.post('/',(req,res)=>{res.send({title: 'Create User Details'});
    });
userRouter.put('/:id',(req,res)=>{res.send({title: 'Update User by id'});
        });
userRouter.delete('/:id',(req,res)=>{res.send({title: 'Delete User Details'});
    });

export default userRouter;


