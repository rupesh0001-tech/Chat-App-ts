import express from "express";
import { registerUser, loginUser } from "../controllers/user.auth.controllers";
import { getProfile } from "../controllers/user.auth.controllers";
import { logoutUser } from "../controllers/user.auth.controllers";
import { isAuthenticated } from "../middlewares/user.auth.middlewares";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", isAuthenticated, getProfile);
router.get("/logout", isAuthenticated, logoutUser);

export default router;