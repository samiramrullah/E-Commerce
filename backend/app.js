const express = require('express');
const morgan = require('morgan')
const bodyParser = require('body-parser');
const productRoutes = require('./api/routes/products');
const userRouter = require('./api/routes/users');
const app = express();


app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')  //wildcard
    res.header('Access-Control-Allow-Headers', '*');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Methods', 'POST', 'GET', 'PATCH', 'DELETE')
        return res.status(200).json({});
    }
    next();
})

app.use('/products', productRoutes);
app.use('/user', userRouter);
module.exports = app;