let express = require("express");
let router = express.Router();
let orderController = require("../controller/order.controller");

router.post("/create", orderController.create);
router.get("/getOrders", orderController.getOrders);
router.put("/update/:id", orderController.updateStatus);

module.exports = router;
