const express = require('express');

const router = express.Router();

const { getAllBootCamps } = require('../controllers/bootcampController').methods;

router.route('/').get(getAllBootCamps);

exports.module = router;