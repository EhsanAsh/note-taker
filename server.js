// Author: EhsanAsh
// Last Modified: 9/25/2023
// Purpose: This file is the main server file for the application. It sets up the server and the routes for the application.
// It also sets up the middleware for the application.
// Dependencies: express, path, routes/notes.js

// importing essential modules
const express = require('express');
const app = express();
const path = require('path');
const { customLog } = require('./middleware/customLog.js');
const api = require('./routes/notes.js');
const port = 3000;

// middlewares for the application
app.use(customLog);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.json(__dirname, 'public')));
app.use('/api', api);

// routes for the application
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/notes.html'));
});

app.get('*', (req, res) => { 
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// listening on port 3000
app.listen(port, () => console.log(`App listening at http://localhost:${port} 🚀`));