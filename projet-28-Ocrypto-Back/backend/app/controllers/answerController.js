const { getGoodAnswer } = require('../dataMappers/answerDataMapper');
const answerDataMapper = require('../dataMappers/answerDataMapper');

module.exports = {
    async getGoodAnswer (request, response) {
        const questionId = request.params.question_id;
        const getGoodAnswer = await answerDataMapper.getGoodAnswer(questionId);
        response.json(getGoodAnswer);
    },

    async getAnswers (request, response) {
        const questionId = request.params.question_id;
        const getAnswers = await answerDataMapper.getAnswers(questionId);
        response.json(getAnswers);
    }
};