const client = require('../services/database');

module.exports = {
    async getChallenge(challengeName) {
        try {
            console.log(challengeName);
            // Get Challenge by name
            const dataChallenge = await client.query(`SELECT * FROM challenge WHERE name = '${challengeName}';`);
            console.log('challenge data recovery');
            return dataChallenge.rows[0];
        } catch (error) {
            return error;
        }
    },
    async getAllChallenges() {
        try {
            // Get all the challenges
            const dataAllChallenges = await client.query('SELECT * FROM challenge;');
            console.log('data recovery of all challenges');
            return dataAllChallenges;
        } catch (error) {
            return error;
        }
    },

};
