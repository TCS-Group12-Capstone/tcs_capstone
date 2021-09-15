let express = require("express");
let router = express.Router();
let reportsController = require("../controller/reports.controller")

router.get("/getAllReports",reportsController.getAllReports);

router.get("/getDailyReports",reportsController.getDailyReport);
router.get("/getWeeklyReports",reportsController.getWeeklyReports);
router.get("/getMonthlyReports",reportsController.getMonthlyReports);
router.post("/getProductReports",reportsController.getProductReports);
router.get("/getCustomerReports",reportsController.getCustomerReports);

module.exports = router;

