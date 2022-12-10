const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/note');

// All paths start with '/api/notes'
router.get('/', notesCtrl.index);
router.post('/new', notesCtrl.create);
router.delete('/:id', notesCtrl.delete);
router.put('/:id', notesCtrl.update);

module.exports = router;
