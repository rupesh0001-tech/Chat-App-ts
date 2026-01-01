import express from "express";
import { sendMessage } from "../controllers/send.message.controller.ts";
import { isAuthenticated } from "../middlewares/user.auth.middlewares.ts";

const router = express.Router();

// routes => /api/messages/_______
router.post("/:id", isAuthenticated, sendMessage);

export default router;