let express = require("express");
let router = express.Router();
let accountController = require("../controller/account.controller");


router.get("/getAllReports",accountController.getAllreports);
router.post("/addEmployee",accountController.addEmployee);
router.delete("/deleteEmployee/:empEmail",accountController.deleteEmployee);






module.exports=router;



