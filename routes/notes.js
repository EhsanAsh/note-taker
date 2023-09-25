// Purpose: To handle all the routes related to notes with the /api/notes path.

const express = require('express');
const notes = express.Router();
const { readFromFile, readAndAppend, readAndDelete } = require('../helpers/fsUtil');
// Importing uuidv4 from uuid package to generate unique id for each note.
const { v4: uuidv4 } = require('uuid');

// GET Route for retrieving all the notes
notes.get('/notes', (req, res) => { 
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

// GET Route for a specific note using id
notes.get('/notes/:id', (req, res) => {

  const noteId = req.params.id;

  readFromFile('./db/db.json')
    .then((data) => JSON.parse(data))
    .then((json) => {
      const result = json.filter((note) => note.id === noteId);
      return result.length > 0 ? res.json(result) : res.json('No note with that id');
    })
    .catch((err) => console.error(err));

});

// POST Route for a new note
notes.post('/notes', (req, res) => { 

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
    res.status(500).json({ error: 'Note not added' });
  }

});

// DELETE Route for a specific note using id and fsUtil.js helper file.
notes.delete('/notes/:id', (req, res) => { 

  const noteId = req.params.id;

  readAndDelete(noteId, './db/db.json');

  const response = {
    status: 'Note deleted successfully 🚀',
    body: noteId,
  };
  res.json(response);

});

module.exports = notes;