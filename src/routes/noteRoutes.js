const express = require("express");
const router = express.Router();
const { createNote } = require("../controllers/noteController");

// POST /api/notes — create a note
router.post("/", createNote);

module.exports = router;
