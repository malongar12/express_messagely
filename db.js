/** Database connection for messagely. */

const Pool = require("pg").Pool



const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "messagely_db",
    password: "malongar12",
    port: 5432,

});

module.exports = pool

const { Client } = require("pg");
const { DB_URI } = require("./config");

const client = new Client(DB_URI);

client.connect();


module.exports = client;
