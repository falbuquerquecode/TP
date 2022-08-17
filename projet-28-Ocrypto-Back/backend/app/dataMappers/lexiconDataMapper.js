const client = require('../services/database');

module.exports = {
    async getListwordDefinition() {
        try {
            // get the definition word list
            const listWordDefinition = await client.query('SELECT * FROM lexicon;');
            console.log('get the word list defition');
            return listWordDefinition.rows;
        } catch (error) {
            return error;
        }
    },

    async getOneWordDefinition(word) {
        try {
            // get the definition of one word
            const oneWordDefinition = await client.query(`SELECT * FROM lexicon WHERE name = '${word}';`);
            console.log(`Verifffffffffff : ${oneWordDefinition}`);

            if (word === oneWordDefinition.rows[0].name) {
                return oneWordDefinition.rows[0];
            }
            // else i send a message
            return 'word does not exist';
        } catch (error) {
            return error;
        }
    },

};
