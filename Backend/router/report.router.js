let express = require("express");
let router = express.Router();
let reportsController = require("../controller/reports.controller")

router.get("/getAllReports",reportsController.getAllReports);

router.get("/getDailyReports",reportsController.getDailyReport);
router.get("/getWeeklyReports",reportsController.getWeeklyReports);
router.get("/getMonthlyReports",reportsController.getMonthlyReports);
router.get("/getProductReports",reportsController.getProductReports);
router.get("/getCustomerReports",reportsController.getCustomerReports);
router.post("/insert",reportsController.insert);

module.exports = router;

