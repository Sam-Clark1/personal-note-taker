const fs = require('fs');
const path = require('path');
let { notesData } = require('../db/db.json');

const getNotes = () => {
    return notesData;
};

const createNote = body => {
    if(!notesData){
        notesData = [];
    };

    notesData.push(body);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({notesData}, null, 2)
    );
};

const deleteNote = id => {
    const filteredData = notesData.filter(selectedNote => selectedNote.id != id);
    notesData = filteredData;
    console.log(filteredData);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({notesData}, null, 2)
    );
};

const validateNote = body => {
    if (!body.title || !body.text) {
        return false;
    }
    return true;
};
module.exports = {getNotes, createNote, deleteNote, validateNote}