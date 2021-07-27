const express = require('express');
const router = express.Router();

const service = require('./service');

router.get('/', service.findAll);

router.get('/:id', service.findOne);

router.post('/', service.create);

router.patch('/:id', service.update);

router.delete('/:id', service.delete);

module.exports = router;