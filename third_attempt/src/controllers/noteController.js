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
