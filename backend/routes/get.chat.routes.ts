import express from "express";
import { getChat } from "../controllers/get.chat.controller.ts";
import { isAuthenticated } from "../middlewares/user.auth.middlewares.ts";

const router = express.Router();

// routes => /api/chats/_______
router.get("/:id", isAuthenticated, getChat);


export default router;