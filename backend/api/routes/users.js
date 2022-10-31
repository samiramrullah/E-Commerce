const express = require('express')
const router = express.Router();

router.post('/', (req, res, next) => {
    user = {
        fName: req.body.name,
        email: req.body.email,
        contact: req.body.contact,
        passwd: req.body.password,
    }
    res.status(201).json({
        message: "User Created",
        user,
    })
});
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Credential Varified"
    })
})

module.exports = router;