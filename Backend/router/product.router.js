let express = require("express");

let router = express.Router();

let productController = require("../controller/product.controller");

router.get("/getAllProducts", productController.getAllProductDetails);

module.exports = router;