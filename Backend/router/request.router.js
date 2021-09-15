let express = require("express");
let router = express.Router();

let requestController = require("../controller/request.controller");

router.post("/send-requests", requestController.Request);

module.exports = router;
