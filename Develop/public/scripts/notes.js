const notesEl = document.getElementById('notes');
const noteTitle = document.getElementById('noteTitle');
const noteBody = document.getElementById('noteBody');

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

//Post notes to the page
const postNote = (note) => {
    fetch('/api/notes', {
        method: 'POST',
        body: JSON.stringify(note)
    })
        .then((response) => response.json())
        .then((data) => {
            //add to list of notes
        })
}