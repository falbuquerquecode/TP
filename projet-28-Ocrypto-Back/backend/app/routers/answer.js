const express = require('express');

const router = express.Router();

const answerController = require('../controllers/answerController');

/* Route to get the good answer  link to a question */
router.route('/answer/:question_id').get(answerController.getGoodAnswer);

/* Route to get the answers link to a question */
router.route('/answers/:question_id').get(answerController.getAnswers);

module.exports = router;
