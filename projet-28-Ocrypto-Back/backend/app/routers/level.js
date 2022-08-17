const express = require('express');

const router = express.Router();

const levelController = require('../controllers/levelController');

/* Route to get one level */
router.route('/level').get(levelController.getLevel);

module.exports = router;
