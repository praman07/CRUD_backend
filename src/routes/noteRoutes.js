const express = require("express");
const router = express.Router();
const { createNote, getAllNotes, getNoteById, updateNote } = require("../controllers/noteController");

// POST /api/notes — create a note
router.post("/", createNote);

// GET /api/notes — get all notes
router.get("/", getAllNotes);

// GET /api/notes/:id — get single note
router.get("/:id", getNoteById);

// PATCH /api/notes/:id — update a note
router.patch("/:id", updateNote);

module.exports = router;
