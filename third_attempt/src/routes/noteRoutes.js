import express from "express";
import { createNote, getAllNotes, getNoteById } from "../controllers/noteController.js";

const router = express.Router();

// POST route
router.post("/", createNote);

// GET routes
router.get("/", getAllNotes);
router.get("/:id", getNoteById);

export default router;

