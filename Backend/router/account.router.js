let express = require("express");
let router = express.Router();
let accountController = require("../controller/account.controller");


router.get("/getAllReports", accountController.getAllreports);
router.post("/addEmployee", accountController.addEmployee);
router.delete("/deleteEmployee/:empEmail", accountController.deleteEmployee);
router.put("/update", accountController.updateProfile);
router.post("/profile", accountController.getProfile);

router.post("/signUp", accountController.signUp);
router.post("/signIn", accountController.signIn);




module.exports = router;



