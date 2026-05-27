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
// @desc    Get all notes
// @route   GET /api/notes
const getAllNotes = asyncHandler(async (req, res) => {
  const notes = await Note.find().sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    count: notes.length,
    data: notes,
  });
});

// @desc    Get single note by ID
// @route   GET /api/notes/:id
const getNoteById = asyncHandler(async (req, res) => {
  const note = await Note.findById(req.params.id);

  if (!note) {
    return res.status(404).json({ success: false, message: "Note not found" });
  }

  res.status(200).json({
    success: true,
    data: note,
  });
});
// @desc    Update a note
// @route   PATCH /api/notes/:id
const updateNote = asyncHandler(async (req, res) => {
  const note = await Note.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!note) {
    return res.status(404).json({ success: false, message: "Note not found" });
  }

  res.status(200).json({
    success: true,
    data: note,
  });
});

module.exports = { createNote, getAllNotes, getNoteById, updateNote };
