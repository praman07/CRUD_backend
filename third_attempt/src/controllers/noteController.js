import Note from "../models/noteModel.js";
import asyncHandler from "../utils/asyncHandler.js";

// @desc    Create a new note
// @route   POST /api/notes
export const createNote = asyncHandler(async (req, res) => {
  const { title, description, category } = req.body;

  // Manual body validations
  if (!title) {
    return res.status(400).json({ success: false, error: "Title is required" });
  }
  if (!description) {
    return res.status(400).json({ success: false, error: "Description is required" });
  }

  const note = await Note.create({ title, description, category });

  res.status(201).json({
    success: true,
    data: note,
  });
});

// @desc    Get all notes
// @route   GET /api/notes
export const getAllNotes = asyncHandler(async (req, res) => {
  const notes = await Note.find().sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    count: notes.length,
    data: notes,
  });
});

// @desc    Get single note by ID
// @route   GET /api/notes/:id
export const getNoteById = asyncHandler(async (req, res) => {
  const note = await Note.findById(req.params.id);

  if (!note) {
    return res.status(404).json({ success: false, message: "Note not found" });
  }

  res.status(200).json({
    success: true,
    data: note,
  });
});

