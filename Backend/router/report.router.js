let express = require("express");
let router = express.Router();
let reportsController = require("../controller/reports.controller")

router.get("/getAllReports",reportsController.getAllreports);


module.exports = router;

