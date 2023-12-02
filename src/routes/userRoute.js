import { Router } from "express";
import UserController from "../controllers/UserController.js";

const userRoute = Router();

userRoute.post("/", UserController.createUser);

export default userRoute;