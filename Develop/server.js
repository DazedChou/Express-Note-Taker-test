const express = require('express');
const noteData = require('./db/db.json');
const path = require('path');
const { readFromFile, readAndAppend } = require('./helpers/fsUtils')

const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/api/notes', (req, res) => res.json(noteData));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.post('/api/notes', (req, res) => {
  const { title, body } = req.body;
  if (req.Body) {
    const newNote = {
      title,
      body,
    };
    readAndAppend(newNote, './db/db.json')
  }
})

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);