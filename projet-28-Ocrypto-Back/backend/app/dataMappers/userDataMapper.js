const bcrypt = require('bcrypt');
const client = require('../services/database');

const saltRounds = 10;

/**
 * User
 * @typedef {object} user
 * @property {string} pseudo
 * @property {string} email
 * @property {string} password
 */

module.exports = {
    async createUser(newUser) {
        try {
            /* check if the new user is already registered */
            const isUniqueChecking = await client.query(`SELECT * FROM "user" WHERE email= '${newUser.email}';`);
            if (isUniqueChecking.rows.length !== 0) {
                const message = { message: 'Cet utilisateur est déjà enregistré' };
                return message;
            }

            /* Password encryption */
            const hashedPassword = await bcrypt.hash(newUser.password, saltRounds);

            /* Insert into database new user */
            await client.query(`
                INSERT INTO "user" (pseudo, email, password)
                VALUES ('${newUser.pseudo}', '${newUser.email}', '${hashedPassword}');
            `);
            const result = await client.query(`SELECT * FROM "user" WHERE email= '${newUser.email}';`);
            return result.rows[0];
        } catch (error) {
            return error;
        }
    },

    /* Get profile user informations or allow connection to the app */
    async loginUser(user) {
        try {
            /* check if the user is already registered */
            const isUniqueChecking = await client.query(`SELECT * FROM "user" WHERE email= '${user.email}';`);
            if (isUniqueChecking.rows.length === 0) {
                const message = { message: 'Cet utilisateur n\'est pas enregistré' };
                return message;
            }
            const result = await client.query(`
                        SELECT * FROM "user" WHERE email= '${user.email}';
                    `);
                /* Password checking */
            const passwordChecking = await bcrypt.compare(`${user.password}`, `${result.rows[0].password}`);

            if (passwordChecking !== true) {
                const message = 'Mauvaise combinaison mot de passe / adresse email';
                return { message, loggedIn: passwordChecking };
            }
            const message = 'Utilisateur connecté';
            return { userData: result.rows[0], message, loggedIn: passwordChecking };
        } catch (error) {
            return error;
        }
    },

    async deleteUser(user) {
        try {
            await client.query(`
            DELETE FROM "user"
            WHERE email='${user.email}';
            `);
            const message = { message: 'Cet utilisateur à été supprimé' };
            return message;
        } catch (error) {
            return error;
        }
    },

    /* Modify one value in table user */
    async modifyUser(userModification) {
        try {
            /* Case if the user try password modification */
            if (Object.keys(userModification)[0] == 'password') {
                /* Password encryption */
                const hashedPassword = await bcrypt.hash(Object.values(userModification)[0], saltRounds);
                await client.query(`
                    UPDATE "user"
                    SET "${Object.keys(userModification)[0]}"='${hashedPassword}'
                    WHERE id='${userId}';
                `);
                return 'User successfully modified';
            }

            await client.query(`
                UPDATE "user"
                SET "${Object.keys(userModification)[0]}"='${Object.values(userModification)[0]}'
                WHERE email='${userModification.email}';
            `);

            const message = { message: 'Cet utilisateur à été modifié' };
            return message;
        } catch (error) {
            return error;
        }
    },

    /* Recovery password */

};
