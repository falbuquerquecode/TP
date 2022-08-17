const client = require('../services/database');

module.exports = {
    async getGoodAnswer (question_id) {
        try {
            const goodAnswer = await client.query(`
                SELECT answer.id, answer.description, answer.question_id
                FROM answer, question
                WHERE question.answer_id = answer.id
                AND question.id = ${question_id};
            `);
            if(goodAnswer.rows.length!==1) {
                return 'There is no answer for this question'
            }
            return goodAnswer.rows[0];
            
        } 
        catch (error) {
            return error;            
        }

    },

    async getAnswers (question_id) {
        try {
            const answers = await client.query(`
                SELECT answer.id, answer.description, answer.question_id
                FROM answer, question
                WHERE answer.question_id = question.id
                AND question.id = ${question_id};
            `);
            if (answers.rows.length !==4) {
                return 'There is no answers for this question'
            }
            return answers.rows;

        }
        catch (error) {
            return error;
        }
    }

    
}