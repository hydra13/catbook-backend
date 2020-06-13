const express = require('express');
const router = express.Router();
const db = require('../db');

// get cat
router.get('/:id', (req, res) => {
    db.query(`select * from cats where id = ${req.params.id};`, (err, records) => {
        if (err) {
            res.status(400)
                .type('application/json')
                .send(`{ error: true, message: "${err.message}"}`)
                .end();
        }
        res.status(200)
            .type('application/json')
            .send(`{ error: false, message: "", data: ${JSON.stringify(records)}}`)
            .end();
    });
});

// get cats list
router.get('/', (req, res) => {
    db.query('select * from cats;', (err, records) => {
        if (err) {
            res.status(400)
                .type('application/json')
                .send(`{ error: true, message: "${err.message}"}`)
                .end();
        }
        res.status(200)
            .type('application/json')
            .send(`{ error: false, message: "", data: ${JSON.stringify(records)}}`)
            .end();
    });
});

// create cat
router.post('/', (req, res) => {
    const { name, username, password, email } = req.body;
    const query = `
        insert into cats (name, username, password, email) 
        values ("${name}", "${username}", "${password}", "${email}");
    `;
    db.query(query, (err, records) => {
        if (err) {
            res.status(400)
                .type('application/json')
                .send(`{ error: true, message: "${err.message}"}`)
                .end();
        }
        res.status(200)
            .type('application/json')
            .send(`{ error: false, message: "", data: ${JSON.stringify(records)}}`)
            .end();
    });
});

// replace cat
router.put('/:id', (req, res) => {
    res.status(204).end();
});

// update cat
router.patch('/:id', (req, res) => {
    res.status(204).end();
});

// delete cat
router.delete('/:id', (req, res) => {
    db.query(`delete from cats where id = ${req.params.id}`, (err, records) => {
        if (err) {
            res.status(400)
                .type('application/json')
                .send(`{ error: true, message: "${err.message}"}`)
                .end();
        }
        res.status(200)
            .type('application/json')
            .send(`{ error: false, message: "", data: ${JSON.stringify(records)}}`)
            .end();
    });
});

module.exports = router;