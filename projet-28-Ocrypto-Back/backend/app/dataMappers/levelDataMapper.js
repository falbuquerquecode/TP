const client = require('../services/database');

module.exports = {
    async getLevel() {
        try {
            // collect all level
            const allLevel = await client.query('SELECT * FROM level;');

            return allLevel.rows;
        } catch (error) {
            return error;
        }
    },

};
