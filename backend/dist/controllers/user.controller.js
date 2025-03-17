"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __importDefault(require("../models/user.model"));
const getAllUsers = (req, res) => {
    const users = user_model_1.default.findAll();
    res.json(users);
};
const getUserByUsername = (req, res) => {
    const { username } = req.params;
    const user = user_model_1.default.findByUsername(username);
    if (!user) {
        res.status(404).json({ error: "404 not found!" });
        return;
    }
    res.json(user);
};
const loginUser = (req, res) => {
    const { username, password } = req.body;
    const isAuthenticated = user_model_1.default.authenticate(username, password);
    if (!username.trim() || !password.trim()) {
        res.status(500).json({ error: "Username and password required." });
        return;
    }
    if (isAuthenticated && req.session) {
        req.session.isLoggedIn = true;
    }
    res.json({ success: true });
};
const addUser = (req, res) => {
    const { username, password, firstname, lastname } = req.body;
    if (!username || !password || !firstname || !lastname) {
        res.status(500).json({
            error: "All fields are required username, password, firstname, lastname",
        });
        return;
    }
    user_model_1.default.create({ username, password, firstname, lastname });
    res.json({ success: true });
};
const logout = (req, res) => {
    if (req.session) {
        req.session = null;
        res.status(200).json({ success: true, message: "Logged out user" });
    }
    res.json({ success: true, message: "User logged out successfully" });
};
exports.default = {
    getAllUsers,
    getUserByUsername,
    loginUser,
    addUser,
    logout,
};
