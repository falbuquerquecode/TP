const lexiconDatamapper = require('../dataMappers/lexiconDataMapper');

module.exports = {
    async getAllLexicon(request, response) {
        const getAllLexicon = await lexiconDatamapper.getListwordDefinition();
        return response.json(getAllLexicon);
    },
    async getOneWordOfLexicon(request, response) {
        const word = request.params.name;
        const getOneLexicon = await lexiconDatamapper.getOneWordDefinition(word);
        return response.json(getOneLexicon);
    },

};
