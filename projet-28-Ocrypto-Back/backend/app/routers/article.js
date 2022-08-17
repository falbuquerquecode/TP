const express = require('express');

const router = express.Router();

const articleController = require('../controllers/articleController');

/* Route to get all article */
router.route('/articles').get(articleController.getAllArticle);

/* Route to get one article */
router.route('/article/:id').get(articleController.getOneArticle);
module.exports = router;
