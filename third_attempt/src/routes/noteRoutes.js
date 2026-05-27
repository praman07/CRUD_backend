import express from "express";
import { createNote, getAllNotes, getNoteById, updateNote, deleteNote } from "../controllers/noteController.js";

const router = express.Router();

// POST route
router.post("/", createNote);

// GET routes
router.get("/", getAllNotes);
router.get("/:id", getNoteById);

// PATCH route
router.patch("/:id", updateNote);

// DELETE route
router.delete("/:id", deleteNote);

export default router;



