// Author: EhsanAsh
// Last Modified: 9/25/2023
// Purpose: This file is the main server file for the application. It sets up the server and the routes for the application.
// It also sets up the middleware for the application.
// Dependencies: express, path, routes/notes.js

// importing essential modules
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const api = require('./routes/notes.js');

// middlewares for the application 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.json(__dirname, 'public')));
app.use('/api', api);
