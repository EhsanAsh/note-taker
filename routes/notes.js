// Purpose: To handle all the routes related to notes with the /api/notes path.

const express = require('express');
const notes = express.Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtil');
// Importing uuidv4 from uuid package to generate unique id for each note.
const { v4: uuidv4 } = require('uuid');

// GET Route for retrieving all the notes