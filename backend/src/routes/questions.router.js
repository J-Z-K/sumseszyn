const express = require('express');
const router = express.Router();
const question = require('../controllers/question.controller.js');

router.get('/:id', question.get);
router.get('/', question.getAll);

router.post('/', question.create);

router.put('/:id', question.update);

router.delete('/:id', question.remove);

module.exports = router;