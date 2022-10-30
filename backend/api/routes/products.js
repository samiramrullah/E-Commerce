const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'I am product get'
    })
});


router.post('/', (req, res, next) => {
    const product = {
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
    }
    res.status(200).json({
        product,
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