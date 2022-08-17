const express = require('express');

const router = express.Router();

const rewardController = require('../controllers/rewardController');

/* Route to check the answer */
router.route('/answer/checking/:user_id/:question_id')
    .get(rewardController.goodAnwserChecking)
    .post(rewardController.goodAnwserChecking);

module.exports = router;
