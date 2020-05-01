const monk = require('monk');

const db = monk('localhost:27017/auth-app');

module.exports = db;

// process.env.DB_URI
