const express = require('express');

const router = express.Router();

const { getAllBootCamps } = require('../controllers/bootcampController');

router.route('/').get(getAllBootCamps);

module.exports = router;