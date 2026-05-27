import express from "express";
import { createNote, getAllNotes, getNoteById, updateNote } from "../controllers/noteController.js";

const router = express.Router();

// POST route
router.post("/", createNote);

// GET routes
router.get("/", getAllNotes);
router.get("/:id", getNoteById);

// PATCH route
router.patch("/:id", updateNote);

export default router;


