import express from "express";
import { login, register } from "../Controller/authController.js";

const router = express.Router();
//register route
router.post("/register", register);

//login
router.post("/login", login);

export default router;
