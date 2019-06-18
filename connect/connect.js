const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'simple_note_app'
});

conn.connect(function (err) {
    if (err) {
        throw err;
    } else {
        console.log('connection');
    }
})

module.exports = conn;