const mysql = require('mysql');

const pool = mysql.createPool({
  host: process.env.DBHOST || 'localhost',
  user: process.env.DBUSER || 'admin',
  password: process.env.DBPASS || 'admin',
  database: 'catbook',
});

class Cat {
  static query(query) {
    return new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        if (err) {
          return reject(err);
        }

        return connection.query(query, (error, result) => {
          if (error) {
            return reject(error);
          }

          connection.release();
          return resolve(result);
        });
      });
    });
  }

  static getAll() {
    return Cat.query('select * from cats;');
  }

  static get(id) {
    return Cat.query(`select * from cats where id = ${id}`);
  }

  static add(record) {
    const {
      name, username, password, email,
    } = record;
    const query = `
            insert into cats (name, username, password, email) 
            values ("${name}", "${username}", "${password}", "${email}");
        `;
    return Cat.query(query);
  }

  static update(id, record) {
    let values = '';
    const {
      name, username, password, email,
    } = record;
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
    return Cat.query(`update cats set ${values} where id = ${id};`);
  }

  static delete(id) {
    return Cat.query(`delete from cats where id = ${id};`);
  }
}

module.exports = Cat;
