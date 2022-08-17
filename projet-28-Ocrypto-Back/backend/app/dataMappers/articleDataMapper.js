const client = require('../services/database');

module.exports = {
    async getAllArticle() {
        try {
            // collect all Articles
            const allArticle = await client.query('SELECT * FROM article;');

            return allArticle.rows;
        } catch (error) {
            return error;
        }
    },

    async getOneArticle(articleId) {
        try {
            // collect one article by id
            const oneArticle = await client.query(`SELECT * FROM article WHERE id = '${articleId}';`);
            /* if the id of the article called corresponds to
            one of the article ids of the database then I return the line */

            // eslint-disable-next-line eqeqeq
            if (articleId == oneArticle.rows[0].id) {
                return oneArticle.rows[0];
            }
            // else i send a message
            return 'Article does not exist';
        } catch (error) {
            return error;
        }
    },

};
