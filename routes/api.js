var express = require('express');
var router = express.Router();

const products = require('./products');
const category = require('./category');

router.use('/v1/categories/:categorySlug/products', products);

router.use('/v1/categories', category);

module.exports = router;
