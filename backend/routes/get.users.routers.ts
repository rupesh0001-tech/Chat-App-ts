import express from "express";
import { getAllUsers } from "../controllers/get.users.controllers";

const router = express.Router();

// routes => /api/users/_______
router.get("/", getAllUsers);

export default router;