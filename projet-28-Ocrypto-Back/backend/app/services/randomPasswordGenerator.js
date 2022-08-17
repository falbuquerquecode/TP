const randomPassword = require('generate-password');

/*Get a random password */
const generatedPassowrd = randomPassword.generate({
	length: 8,
	numbers: true
});


module.exports = generatedPassowrd;

