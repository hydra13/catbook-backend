const express = require('express');
const router = express.Router();
const Cat = require('../models/cats');

const handleRequest = async (res, method, ...params) => {
    try {
        const result = await Cat[method](...params);
        res.status(200)
            .type('application/json')
            .send(`{ "error": false, "message": "", "data": ${JSON.stringify(result)}}`)
            .end();
    } catch (err) {
        res.status(400)
            .type('application/json')
            .send(`{ "error": true, "message": "${err.message}"}`)
            .end();
    }
}

// get cat
router.get('/:id', async (req, res) => {
    handleRequest(res, 'get', req.params.id);
});

// get cats list
router.get('/', async (req, res) => {
    handleRequest(res, 'getAll');
});

// create cat
router.post('/', async (req, res) => {
    handleRequest(res, 'add', req.body);
});

// replace cat
router.put('/:id', (req, res) => {
    console.log('id: ' + req.params.id)
    console.log('body: ' + JSON.stringify(req.body))
    handleRequest(res, 'update', req.params.id, req.body);
});

// update cat
router.patch('/:id', (req, res) => {
    handleRequest(res, 'update', req.params.id, req.body);
});

// delete cat
router.delete('/:id', (req, res) => {
    handleRequest(res, 'delete', req.params.id);
});

module.exports = router;