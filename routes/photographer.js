const express = require('express');
const router = express.Router();
const photographerHandler = require('../handlers/photographerHandler');

router.get('/:id', photographerHandler.renderPhotographerPage);

module.exports = router;
