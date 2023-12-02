import { Router } from "express";
import UserController from "../controllers/UserController.js";
import authMiddleware from "../middlewares/auth.middlewares.js";

const userRoute = Router();

userRoute.post("/", UserController.createUser);

userRoute.get("/:id", authMiddleware, UserController.findByIdUserController);

export default userRoute;
