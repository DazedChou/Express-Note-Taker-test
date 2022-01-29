const express = require('express');
////https://nodejs.org/api/modules.html#modules_require_id
const noteData = require('.db/db.json');

const PORT = 3001;

const app = express();

app.get('/api/notes', (req, res) => res.json(noteData));