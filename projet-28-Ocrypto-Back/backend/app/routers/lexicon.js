const express = require('express');

const router = express.Router();

const lexiconController = require('../controllers/lexiconController');

/* Route to get all lexicon entries */
router.route('/lexicon').get(lexiconController.getAllLexicon);

/* Route to get one lexicon entry */
router.route('/lexicon/:name').get(lexiconController.getOneWordOfLexicon);

module.exports = router;
