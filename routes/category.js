const express = require("express");
const categoryController = require("../controllers/api/v1/categoriesController");

const router = express.Router();

router.get("/", categoryController.getCategories);

module.exports = router;