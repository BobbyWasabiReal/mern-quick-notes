const Note = require('../../models/note');

module.exports = {
    index,
    create,
    delete: deleteOne,
    update
};

async function index(req, res) {
    const notes = await Note.find({});
    res.json(notes);
}

async function create(req, res) {
    req.body.user = req.user._id;
    console.log(req.body);
    const note = await Note.create(req.body);
    res.json(note);
}

async function deleteOne(req, res) {
    const deletedNote = await Note.findByIdAndRemove(req.params.id);
    res.json(deletedNote);
}

async function update(req, res) {
    const updatedNote = await Note.findByIdAndUpdate(req
        .params
        .id
        .req.body, {
        new: true
    });
    res.json(updatedNote);
}