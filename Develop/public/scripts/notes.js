const notesEl = document.getElementById('notes');
const noteTitle = document.getElementById('noteTitle');
const noteBody = document.getElementById('noteBody');
const saveButton = document.getElementById('saveBtn');
const addButton = document.getElementById('addBtn');

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

saveButton.addEventListener('click', () => {
    // Create new Note item in list
    // Post note to server
    // Empty out note

    const titleContent = noteTitle.value;
    const bodyContent = noteBody.value;

    const newNote = {
        title: titleContent,
        body: bodyContent,
    }
    createNote(newNote); // appends new note to page
    postNote(newNote); // Sends note to server
});

addButton.addEventListener('click', () => {
    // Reset input fields
    noteTitle.innerHTML = "";
    noteBody.innerHTML = "";
});

