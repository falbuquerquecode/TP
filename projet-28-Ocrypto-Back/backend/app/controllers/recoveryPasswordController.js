const recoveryPasswordDataMapper = require('../dataMappers/recoveryPasswordDataMapper');
const randomPassword = require('../services/randomPasswordGenerator');
const nodemailer = require('../services/nodeMailer');


module.exports = {
    async insertTemporaryPassword(request, response) {
        const userEmail = request.body.email;
        const setTemporaryPassword = await recoveryPasswordDataMapper.recoveryPassword(randomPassword, userEmail);

        /* Send an email to the user */
        nodemailer(userEmail, randomPassword);

        return response.json(setTemporaryPassword);
    },
};
