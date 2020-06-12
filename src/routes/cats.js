const express = require('express')
const router = express.Router()

// get cat
router.get('/:id', (req, res) => {
    res.status(204).end();
});

// get cats list
router.get('/', (req, res) => {
    res.status(200)
        .type('application/json')
        .send('{ error: false, message: "cats routing"}')
        .end();
});

// create cat
router.post('/', (req, res) => {
    res.status(204).end();
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
    res.status(204).end();
});

module.exports = router;