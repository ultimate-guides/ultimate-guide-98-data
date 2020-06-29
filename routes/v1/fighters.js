const express = require('express');
const controller = require('../../controllers/v1/fighters');
const router = express.Router();

router.get('/', controller.getFighters);

module.exports = router;
