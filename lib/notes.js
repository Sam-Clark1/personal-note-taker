const fs = require('fs');
const path = require('path');
const { notesData } = require('../db/db.json');

const getNotes = () => {
    return notesData;
};

const createNote = body => {
    notesData.push(body);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({notesData}, null, 2)
    );
};

const deleteNote = id => {
    const filteredData = notesData.filter(selectedNote => selectedNote.id != id);
    
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({filteredData}, null, 2)
    );
};

const validateNote = body => {
    if (!body.title || !body.text) {
        return false;
    }
    return true;
};
module.exports = {getNotes, createNote, deleteNote, validateNote}