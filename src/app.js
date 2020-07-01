const path = require('path')
const express = require('express');
const favicon = require('serve-favicon');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const cats = require('./routes/cats');

const app = express();

app.use(morgan('combined'));

app.use(cors());

app.use(favicon(path.resolve(__dirname, '..', 'public', 'favicon.ico')));

app.use(bodyParser.json());

app.use('/cats', cats);

app.get('/', (req, res) => {
    res.status(200)
        .type('application/json')
        .send('{ "error": false, "message": "CatBook backend server"}')
        .end();
})

app.all('*', (req, res) => {
    res.status(404)
        .type('application/json')
        .send('{ "error": true, "message": "Error 404. Not found"}')
        .end();
})

module.exports = app;