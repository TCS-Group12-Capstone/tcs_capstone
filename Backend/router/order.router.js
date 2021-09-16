let express = require("express");
let router = express.Router();
let orderController = require("../controller/order.controller");

router.post("/create", orderController.create);
router.post("/getTracking", orderController.getTracking);
router.post("/getStatus", orderController.getStatus);

module.exports = router;
