const client = require('../services/database');

module.exports = {
    async goodAnswerChecking(question_id, checking) {
        const goodAnswerChecking = await client.query(`
            SELECT answer.id, answer.description, answer.question_id
            FROM answer, question
            WHERE question.answer_id = answer.id
            AND question.id = ${question_id};
        `);
        if (checking.id !== goodAnswerChecking.rows[0].id) {
            return false;
        }
        return true;
    },

    async getUserRewardAndLevel(user_id) {
        const getUserRewardById = await client.query(`
            SELECT "user".pseudo, "user".reward, "user".level
            FROM "user"
            WHERE id= ${user_id};
        `);
        return getUserRewardById.rows[0];
    },

    async getQuestionRewardById(question_id) {
        const getQuestionRewardById = await client.query(`
            SELECT question.id, question.description, question.reward
            FROM question
            WHERE id= ${question_id};
        `);
        return getQuestionRewardById.rows[0];
    },

    async insertReward(newUserReward, user_id) {
        await client.query(`
            UPDATE "user"
            SET reward= ${newUserReward}
            WHERE id= ${user_id};
        `);
    },

    async insertLevel(newUserLevel, user_id) {
        console.log(newUserLevel);
        await client.query(`
            UPDATE "user"
            SET level= '${newUserLevel}'
            WHERE id= ${user_id};
        `);
    },
};
