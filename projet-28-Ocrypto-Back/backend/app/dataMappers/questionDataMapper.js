const client = require('../services/database');

module.exports = {
    async getOnequestion (id) {
        try{
            const question = await client.query(`
                SELECT * FROM question
                WHERE id=${id};
            `);
            if (question.rows.length!==1) {
                return 'There is no question with this id';
            }
            return question.rows[0];

        }
        catch (error) {
            return error;
        }
    },

    async getAllQuestions () {
        try{
            const question = await client.query(`
                SELECT * FROM question;                
            `);
            if (question.rows.length==0) {
                return 'There is no question';
            }
            return question.rows;

        }
        catch (error) {
            return error;
        }

    }
}