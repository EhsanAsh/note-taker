// Purpose: To handle all the routes related to notes with the /api/notes path.

const express = require('express');
const notes = express.Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtil');
// Importing uuidv4 from uuid package to generate unique id for each note.
const { v4: uuidv4 } = require('uuid');

// GET Route for retrieving all the notes
notes.get('/', (req, res) => { 
  readFromFile('/db/db.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for a new note
notes.post('/', (req, res) => { 
  console.log(req.body);
});

module.exports = notes;