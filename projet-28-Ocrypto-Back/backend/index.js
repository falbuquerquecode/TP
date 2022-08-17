const server = require('./app/services/server');

/* Run the service "server" */
const backServerPort = process.env.PORT || 3000;
const backServerMessage = 'Hello O Crypto';
server.initServer(backServerPort, backServerMessage);
