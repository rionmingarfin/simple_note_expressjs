const mysql = require('mysql');
const env = require('../config');

const conn = mysql.createConnection({
    host: env.LOCALHOST,
    user: env.USER,
    password: env.PASSWORD,
    database: env.DATABASE
});

conn.connect(function (err) {
    if (err) {
        throw err;
    } else {
        console.log('connection');
    }
})

module.exports = conn;