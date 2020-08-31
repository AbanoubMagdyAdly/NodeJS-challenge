const express = require("express");
const productController = require("../controllers/api/v1/productsController");

const router = express.Router({ mergeParams : true });

router.get("/", productController.getProducts);

module.exports = router;