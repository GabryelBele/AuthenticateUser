import { Router } from "express";
import authRoute from "./authRoute.js";
import userRoute from './userRoute.js'

const router = Router();


router.use("/user", userRoute);

router.use("/auth", authRoute);

export default router;
