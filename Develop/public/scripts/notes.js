const notesEl = document.getElementById('notes');
const noteTitle = document.getElementById('noteTitle');
const noteBody = document.getElementById('noteBody');
const saveButton = document.getElementById('')

const createNote = (note) => {
    //create list item for note
    const newNote = document.createElement('li');
    newNote.innerHTML = `${note.title}`;
    notesEl.appendChild(newNote);
}

//Get list of notes
const getNotes = () =>
    fetch('/api/notes', {
        methos: 'GET',
    })
        .then((response) => response.json())
        .then((data) => data)
        .catch((error) => {
            console.error('Error: ', error);
        });

//when the page loads, get the notes.
getNotes().then((data) => data.forEach((note) => createNote(note)));

//Post notes to the page
const postNote = (note) => {
    fetch('/api/notes', {
        method: 'POST',
        body: JSON.stringify(note)
    })
        .then((response) => response.json())
        .then((data) => {
            createNote(data);
        })
}



