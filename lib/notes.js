const fs = require('fs');
const path = require('path');
const {notesData} = require('../../db/db.json')

const getNotes = () => {
    return notesData;
};

const createNote = body => {
notesData.push(body);
fs.writeFileSync()
};

const deleteNote = () => {

};

const validateNote = body => {
if (!body.title || !body.text) {
    return false;
}
return true;
};
module.exports = {getNotes, createNote, deleteNote, validateNote}