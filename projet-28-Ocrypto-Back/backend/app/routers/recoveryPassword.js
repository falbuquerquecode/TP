const express = require('express');

const router = express.Router();

const recoveryPasswordController = require('../controllers/recoveryPasswordController');

/* Route to set a temporary password and send an email to the user */
router.route('/forgotten-password').post(recoveryPasswordController.insertTemporaryPassword);

module.exports = router;
