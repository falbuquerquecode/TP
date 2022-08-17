const { Pool } = require('pg');
require('dotenv').config();

/* Create new pool */
/* Pool works like Client but it allow many connection in same time */
const client = new Pool({
    user: process.env.DBUSER,
    host: process.env.DBHOST,
    database: process.env.DBNAME,
    password: process.env.DBPASSWORD,
    port: process.env.DBPORT,
});

client
    .connect()
    .then(() => { console.log('Connection successful'); })
    .catch((error) => console.log(`Connection failed ${error}`));

module.exports = client;
