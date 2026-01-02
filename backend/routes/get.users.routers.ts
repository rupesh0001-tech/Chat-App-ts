import express from "express";
import { getAllUsers } from "../controllers/get.users.controllers.ts";
import { isAuthenticated } from "../middlewares/user.auth.middlewares.ts";

const router = express.Router();

// routes => /api/users/_______
router.get("/", isAuthenticated, getAllUsers);

export default router;