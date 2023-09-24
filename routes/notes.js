// Purpose: To handle all the routes related to notes with the /api/notes path.

const express = require('express');
const notes = express.Router();
const { readFromFile, readAndAppend, readAndDelete } = require('../helpers/fsUtil');
// Importing uuidv4 from uuid package to generate unique id for each note.
const { v4: uuidv4 } = require('uuid');

// GET Route for retrieving all the notes
notes.get('/', (req, res) => { 
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for a new note
notes.post('/', (req, res) => { 

  console.log(req.body);

  const { title, text } = req.body;

  if (req.body) {
    const newNote = { title, text, id: uuidv4(), };
    readAndAppend(newNote, './db/db.json');
    const response = {
      status: 'Note added successfully 🚀',
      body: newNote,
    };
    res.json(response);
  } else {
    res.error('Error in adding note');
  }

});

// DELETE Route for a specific note using id and fsUtil.js helper file.
notes.delete('/:id', (req, res) => { 

  const noteId = req.params.id;

  readAndDelete(noteId, './db/db.json');

  const response = {
    status: 'Note deleted successfully 🚀',
    body: noteId,
  };
  res.json(response);

});

module.exports = notes;