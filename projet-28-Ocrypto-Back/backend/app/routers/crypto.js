const express = require('express');

const router = express.Router();

const cryptoController = require('../controllers/cryptoController');

/* Get all favorite list of crypto currencies */
router.route('/favoris/:userId/cryptos').get(cryptoController.getListCryptoFavoris);

/* Post a new crypto currencie in favorite user's list */
router.route('/favoris/:userId/:cryptosId').post(cryptoController.addOneCryptoFavoris);

/* Delete a crypto currencie in favorite user's list */
router.route('/deleteFavoris/:userId/:cryptosId').post(cryptoController.deleteOneCryptoFavoris);

module.exports = router;
