const express = require('express');

const router = express.Router();

const homepageController = require('../controllers/homepageController');

/* Route to home page */
router.route('/').get(homepageController.displayHomepage);

module.exports = router;
