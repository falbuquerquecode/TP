const challengeDataMapper = require('../dataMappers/challengeDataMapper');

module.exports = {
    async getChallenge(request, response) {
        const challengeName = request.params.name;
        const getChallenge = await challengeDataMapper.getChallenge(challengeName);
        return response.json(getChallenge);
    },

    async getAllChallenges(request, response) {
        const getAllChallenges = await challengeDataMapper.getAllChallenges();
        return response.json(getAllChallenges);
    },
};
