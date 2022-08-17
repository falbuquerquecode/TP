const levelDataMapper = require('../dataMappers/levelDataMapper');

module.exports = {
    async getLevel(request, response) {
        const level = await levelDataMapper.getLevel();

        return response.json(level);
    },
};
