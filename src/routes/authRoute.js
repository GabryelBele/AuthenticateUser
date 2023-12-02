import { Router } from "express";
import AuthController from "../controllers/AuthController.js";

const authRoute = Router();

authRoute.post("/", AuthController.loginController);

export default authRoute;