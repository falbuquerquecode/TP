const morgan = require('morgan');

/* give url, status code, method and response time to every server requests */
module.exports = morgan(
    `url : :url 
status : :status
method : :method
response : :response-time
`,
);
