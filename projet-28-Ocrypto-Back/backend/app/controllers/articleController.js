const articleDataMapper = require('../dataMappers/articleDataMapper');

module.exports = {
    async getAllArticle(request, response) {
        const getAllArticle = await articleDataMapper.getAllArticle();
        return response.json(getAllArticle);
    },

    async getOneArticle(request, response) {
        const article = request.params.id;
        const getOneArticle = await articleDataMapper.getOneArticle(article);
        return response.json(getOneArticle);
    },

};
