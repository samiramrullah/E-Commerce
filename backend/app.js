const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./api/routes/products')
const app = express();

app.use('/products', productRoutes)
module.exports = app;