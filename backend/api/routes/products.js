const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'I am product get'
    })
});


router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'I am product post'
    })
});

router.patch('/', (req, res, next) => {
    res.status(200).json({
        message: 'I am product patch'
    })
});

router.delete('/', (req, res, next) => {
    res.status(200).json({
        message: 'I am product delete'
    })
});

module.exports = router;