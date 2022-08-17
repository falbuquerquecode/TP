const bcrypt = require('bcrypt');
const client = require('../services/database');

const saltRounds = 10;

module.exports = {
    async recoveryPassword(randomPassword, user_email) {
        /* Password encryption */
        const hashedPassword = await bcrypt.hash(randomPassword, saltRounds);
        await client.query(`
            UPDATE "user"
            SET "password"='${hashedPassword}'
            WHERE email='${user_email}';
        `);
        return 'Profile updated';
    },

};
