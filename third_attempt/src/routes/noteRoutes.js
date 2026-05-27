import express from "express";
import { createNote } from "../controllers/noteController.js";

const router = express.Router();

// POST route
router.post("/", createNote);

export default router;
