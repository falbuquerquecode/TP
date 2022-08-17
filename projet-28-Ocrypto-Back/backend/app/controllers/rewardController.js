const rewardDataMapper = require('../dataMappers/rewardDatamapper');

module.exports = {
    async goodAnwserChecking(request, response) {
        const questionId = request.params.question_id;
        const checking = request.body;
        const goodAnswerChecking = await rewardDataMapper.goodAnswerChecking(questionId, checking);
        response.json(goodAnswerChecking);

        if (goodAnswerChecking === true) {
            const getUserReward = await rewardDataMapper.getUserRewardAndLevel(4);

            const getQuestionRewardById = await rewardDataMapper.getQuestionRewardById(questionId);

            const newUserReward = getUserReward.reward + getQuestionRewardById.reward;

            await rewardDataMapper.insertReward(newUserReward, 4);

            /* Change the user level */
            const levels = ['Novice', 'Confirmé', 'Expert'];

            if (newUserReward > 0 && newUserReward < 299) {
                await rewardDataMapper.insertLevel(levels[0], 4);
            } else if (newUserReward > 299 && newUserReward < 899) {
                await rewardDataMapper.insertLevel(levels[1], 4);
            } else if (newUserReward > 899 && newUserReward < 999999999) {
                await rewardDataMapper.insertLevel(levels[2], 4);
            }
        }
    },
};
