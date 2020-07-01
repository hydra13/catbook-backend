const path = require('path')
const express = require('express');
const favicon = require('serve-favicon');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const prometheus = require('prom-client')
const cats = require('./routes/cats');

const app = express();

let numOfRequests = new prometheus.Counter({
    name: 'numOfRequests',
    help: 'Number of requests made',
    labelNames: ['method']
});


app.use(morgan('combined'));

app.use(cors());

app.use(favicon(path.resolve(__dirname, '..', 'public', 'favicon.ico')));

app.use((req, res, next) => {
    console.log(req.url);
    if (req.url !== '/metrics') {
        numOfRequests.inc({ method: req.method });
    }
    next();
})

app.use(bodyParser.json());

app.use('/cats', cats);

app.get('/metrics', (req, res) => {
    res.set('Content-Type', prometheus.register.contentType);
    res.end(prometheus.register.metrics())
})

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