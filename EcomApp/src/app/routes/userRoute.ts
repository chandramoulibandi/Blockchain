import {UserController} from '../controllers/usercontroller';
import * as express from 'express';


export const userRoute=express.Router();

userRoute.get('/' , UserController.getProfile);

userRoute.post("/login",UserController.login);

userRoute.post("/registration",UserController.registration);

userRoute.put("/", UserController.updateProfile);