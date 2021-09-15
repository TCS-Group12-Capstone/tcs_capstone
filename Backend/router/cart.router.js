let express = require("express");

let router = express.Router();

let cartController = require("../controller/cart.controller");

router.post("/addCart", cartController.addCart);
router.get("/getCart/:userId", cartController.getCart);

module.exports = router;