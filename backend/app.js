const express = require('express');
const morgan = require('morgan')
const bodyParser = require('body-parser');
const productRoutes = require('./api/routes/products');
const userRouter = require('./api/routes/users');
const mongoose = require('mongoose');
const { application } = require('express');
const app = express();


const db = 'mongodb://localhost:27017/E-Commerce';

//connecting to mongodb

mongoose.connect(db).then(() => {
    console.log("Connection Successful");
}).catch((err) => console.log('Error'))
mongoose.Promise = global.Promise;

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//handling cors error
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')  //wildcard
    res.header('Access-Control-Allow-Headers', '*');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Methods', 'POST', 'GET', 'PATCH', 'DELETE')
        return res.status(200).json({});
    }
    next();
})

//Routes for handling request
app.use('/products', productRoutes);
app.use('/user', userRouter);

//error handling if no path matched

app.use((req, res, next) => {
    const error = new Error('No matching paths')
    error.status = 404;
    next(error);
})

// if methods not matched

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})


module.exports = app;