const mysql = require('mysql');

const pool = mysql.createPool({
    host: process.env.DBHOST || 'localhost',
    user: process.env.DBUSER || 'admin',
    password: process.env.DBPASS || 'admin',
    database: 'catbook'
});

class Cat {
    static _query(query) {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) {
                    return reject(err);
                }

                connection.query(query, (err, result) => {
                    if (err) {
                        return reject(err);
                    }

                    connection.release();
                    resolve(result);
                })
            })
        })
    }
    static getAll() {
        return Cat._query('select * from cats;');
    }

    static get(id) {
        return Cat._query(`select * from cats where id = ${id}`);
    }

    static add(record) {
        const { name, username, password, email } = record;
        const query = `
            insert into cats (name, username, password, email) 
            values ("${name}", "${username}", "${password}", "${email}");
        `;
        return Cat._query(query);
    }

    static update(id, record) {
        let values = '';
        const { name, username, password, email } = record;
        if (typeof name !== 'undefined') {
            values += `name = "${name}"`;
        }
        if (typeof username !== 'undefined') {
            if (values.length > 0) {
                values += ', ';
            }
            values += `username = "${username}"`;
        }
        if (typeof password !== 'undefined') {
            if (values.length > 0) {
                values += ', ';
            }
            values += `password = "${password}"`;
        }
        if (typeof email !== 'undefined') {
            if (values.length > 0) {
                values += ', ';
            }
            values += `email = "${email}"`;
        }
        return Cat._query(`update cats set ${values} where id = ${id};`);
    }

    static delete(id) {
        return Cat._query(`delete from cats where id = ${id};`);
    }
}

module.exports = Cat;