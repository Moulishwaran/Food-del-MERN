import express from "express";
import { loginUser, registerUser } from "../controllers/userController.js";

const userrouter = express.Router();

userrouter.post("/register", registerUser);
userrouter.post("/login", loginUser);

export default userrouter;
