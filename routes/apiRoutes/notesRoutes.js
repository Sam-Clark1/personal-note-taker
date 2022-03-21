const router = require('express').Router();
const { notesData } = require('../../db/db.json');
const { v4: uuidv4 } = require('uuid')
const {getNotes, createNote, deleteNote, validateNote} = require('../../lib/notes')

router.get('/notes', (req, res) => {
if (req){
    res.json(getNotes())
} else {
    res.status(404);
};
});

router.post('/notes', (req, res) => {
req.body.id = uuidv4();

if (!validateNote(req.body)){
    res.status(400).send('Note must have a title and body')
} else {
    const note = createNote(req.body);
    res.json(note);
};
});

router.delete('/notes/:id', (req, res) => {
    deleteNote(req.params.id);
    res.json();
});

module.exports = router;