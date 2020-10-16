var express = require('express');
var router = express.Router();
var productsController = require('../controllers/productsController')

/* GET users listing. */
router.get('/', productsController.productDetail)

module.exports = router;
