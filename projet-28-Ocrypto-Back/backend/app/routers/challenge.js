const express = require('express');

const router = express.Router();

const challengeController = require('../controllers/challengeController');

/* Route to get a challenge by name */
router.route('/challenge/:name').get(challengeController.getChallenge);
/* Route to get all challenge */
router.route('/challenges').get(challengeController.getAllChallenges);
module.exports = router;
