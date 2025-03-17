import { Router } from "express";
import userController from "../controllers/user.controller";

const userRouter = Router();

userRouter.get("/", userController.getAllUsers);
userRouter.post("/", userController.addUser);
userRouter.get("/:username", userController.getUserByUsername);
userRouter.get("/logout", userController.logout);
userRouter.post("/login", userController.loginUser);

export default userRouter;
