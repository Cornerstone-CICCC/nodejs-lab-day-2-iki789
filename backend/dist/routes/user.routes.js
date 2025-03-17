"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const userRouter = (0, express_1.Router)();
userRouter.get("/", user_controller_1.default.getAllUsers);
userRouter.post("/", user_controller_1.default.addUser);
userRouter.get("/:username", user_controller_1.default.getUserByUsername);
userRouter.get("/logout", user_controller_1.default.logout);
userRouter.post("/login", user_controller_1.default.loginUser);
exports.default = userRouter;
