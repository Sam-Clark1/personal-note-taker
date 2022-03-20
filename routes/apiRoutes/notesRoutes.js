const router = require('express').Router();
const {notesData} = require('../../db/db.json')
const {} = require('../../lib/notes')

router.get('./notes', (req, res) => {
if (req.query){
    res.json(getNotes())
} else {
    res.send(404);
};
});


router.post('/notes', (req, res) => {
req.body.id = notesData.length.toString();

if (!validateNote(req.body)){
    res.status(400).send('Note must have a title and body')
} else {
    const note = createNote(req.body);
    res.json(note);
};

});

module.exports = router;