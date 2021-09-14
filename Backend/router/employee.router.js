let express = require("express");
let router = express.Router();
let employeeController = require("../controller/employee.controller");


router.get("/getAllReports",employeeController.getAllreports);
router.post("/addEmployee",employeeController.addEmployee);
router.delete("/deleteEmployee/:empEmail",employeeController.deleteEmployee);

module.exports=router;