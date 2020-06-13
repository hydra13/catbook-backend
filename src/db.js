const mysql = require('mysql');

const db = mysql.createConnection({
    host: process.env.DBHOST || 'localhost',
    user: process.env.DBUSER || 'admin',
    password: process.env.DBPASS || 'admin',
    database: 'catbook'
});

db.connect((err) => {
    if (err) {
        console.log(err);
        throw err;
    }
});

module.exports = db;