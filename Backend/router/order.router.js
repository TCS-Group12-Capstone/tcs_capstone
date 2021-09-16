let express = require("express");
let router = express.Router();
let orderController = require("../controller/order.controller");

router.post("/create", orderController.create);

module.exports = router;
