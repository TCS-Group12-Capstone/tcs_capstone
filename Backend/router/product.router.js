let express = require("express");

let router = express.Router();

let productController = require("../controller/product.controller");

router.get("/getAllProducts", productController.getAllProductDetails);
router.get("/getAllId", productController.getById);
router.post("/getProducts", productController.getProductDetails);
router.put("/updateById", productController.updateById);
router.patch("/decreaseAmount", productController.decreaseAmount);
router.delete("/deleteById", productController.deleteById);

module.exports = router;
