import e from "express";
import Note from "../models/Note.js"
export async function getAllNotes(req, res) {
    try {
        const notes = await Note.find().sort({ createdAt: -1 });
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({ message: "Error fetching notes" });
    }
}
export async function createNote(req, res) {
  try {
    const { title, content } = req.body;
    console.log("Creating note:", title, content);

    const note = new Note({ title, content });
    const savednote = await note.save();

    console.log("Note created successfully:", savednote);

    res.status(201).json({
      message: "Note created successfully",
      note: savednote
    });
  } catch (error) {
    console.error("Error creating note:", error);
    res.status(500).json({ message: "Error creating note", error });
  }
}

import mongoose from "mongoose";

export async function updateNote(req, res) {
  try {
    const { title, content } = req.body;
    const id = req.params.id;

   

    const updatedNote = await Note.findByIdAndUpdate(
      id,
      { title, content },
      { new: true }
    );

    if (!updatedNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    return res.status(200).json({ message: "Note updated", note: updatedNote });
  } catch (error) {
    console.error(error); // 🔍 Log the real error
    res.status(500).json({ message: "Error updating note" });
  }
}

export async function  deleteNote  (req, res){
    try {
        const id = req.params.id;
        const deletedNote = await Note.findByIdAndDelete(id);
    
        if (!deletedNote) {
        return res.status(404).json({ message: "Note not found" });
        }
    
        return res.status(200).json({ message: "Note deleted successfully" });
    } catch (error) {
        console.error(error); // 🔍 Log the real error
        res.status(500).json({ message: "Error deleting note" });
    }
}
export async function getNoteById(req, res) {
    try {
        const id = req.params.id;
        const note = await Note.findById(id );
        if (!note) {    
            return res.status(404).json({ message: "Note not found" });
        }   
        return res.status(200).json(note);
    } catch (error) {   
        console.error(error); // 🔍 Log the real error
        res.status(500).json({ message: "Error fetching note" });
    }
}