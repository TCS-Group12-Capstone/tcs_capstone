let express = require("express");

let router = express.Router();

let productController = require("../controller/product.controller");

router.get("/getAllProducts", productController.getAllProductDetails);
router.post("/getProducts", productController.getProductDetails);

module.exports = router;