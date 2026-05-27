const Note = require("../models/noteModel");
const asyncHandler = require("../utils/asyncHandler");

// @desc    Create a new note
// @route   POST /api/notes
const createNote = asyncHandler(async (req, res) => {
  const { title, content, category } = req.body;

  const note = await Note.create({ title, content, category });

  res.status(201).json({
    success: true,
    data: note,
  });
});

module.exports = { createNote };
