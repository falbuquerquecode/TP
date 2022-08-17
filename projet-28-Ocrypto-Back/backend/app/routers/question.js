const express = require('express');

const router = express.Router();

const questionController = require('../controllers/questionController');

/* Route to get one question */
router.route('/question/:id').get(questionController.getOneQuestion);

/* Route to get all questions */
router.route('/questions').get(questionController.getAllQuestions);

module.exports = router;
