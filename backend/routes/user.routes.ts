import express from "express";

import { registerUser, loginUser } from "../controllers/user.auth.controllers.ts";
import { getProfile } from "../controllers/user.auth.controllers.ts";
import { logoutUser } from "../controllers/user.auth.controllers.ts";
import { isAuthenticated } from "../middlewares/user.auth.middlewares.ts";

const router = express.Router();


// routes => /api/users/_______
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", isAuthenticated, getProfile);
router.get("/logout", isAuthenticated, logoutUser);

export default router;