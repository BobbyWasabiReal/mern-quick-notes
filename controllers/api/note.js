const Note = require('../../models/note');
const User = require('../../models/user');

module.exports = {
    index,
    create,
    delete: deleteOne,
    update
};

async function index(req, res) {
    const notes = await Note.find({});
    res.status(200).json(notes);
}

async function create(req, res) {
    req.body.user = req.user._id;
    const note = await Note.create(req.body);
    res.status(201).json(note);
}

async function deleteOne(req, res) {
    const deletedNote = await Note.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedNote);
}

async function update(req, res) {
    const updatedNote = await Note.findByIdAndUpdate(req
        .params
        .id
        .req.body, {
        new: true
    });
    res.status(200).json(updatedNote);
}