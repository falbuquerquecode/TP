const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');

router.route('/sign-in')
/**
 * POST /sign-in
 * @summary  Route to sign in a new user
 * @tags user
 * @param {user} request.body.required user information
 * @return {user} 200 - success response - application/json
 */
    .post(userController.insertNewUser);

router.route('/log-in')
/**
 * POST /log-in
 * @summary  Route to login a registered user
 * @tags user
 * @param {user} request.body.required user information
 * @return {user} 200 - success response - application/json
 */
    .post(userController.loginUser)

/**
 * GET /log-in
 * @summary  Route to login a registered user
 * @tags user
 * @param {user} request.body.required - user information - application/json
 * @return {user} 200 - success response - application/json
 */
    .get(userController.loginUser);

router.route('/profile')
/**
 * GET /profile
 * @summary  Route to get user's data information
 * @tags user
 * @param {user} request.body.required - user information - application/json
 * @return {user} 200 - success response - application/json
 */
    .get(userController.loginUser);

/* Route to delete or modify a user */
router.route('/profile/update')
/**
 * DELETE /profile/update
 * @summary  Route to delete a user
 * @tags user
 * @param {user} request.body.required user information
 * @return {user} 200 - success response - application/json
 */
    .delete(userController.deleteUser)

/**
 * PATCH /profile/update
 * @summary  Route to modify user's information
 * @tags user
 * @param {user} request.body.required user information
 * @return {user} 200 - success response - application/json
 */
    .patch(userController.updateUser);

module.exports = router;
