let express = require("express");
let router = express.Router();
let accountController = require("../controller/account.controller");


router.post("/addEmployee", accountController.addEmployee);
router.delete("/deleteEmployee/:empEmail", accountController.deleteEmployee);
router.put("/update", accountController.updateProfile);
router.post("/profile", accountController.getProfile);

router.post("/signUp", accountController.signUp);
router.post("/signIn", accountController.signIn);

router.post("/empSignIn",accountController.empSignIn);

router.patch("/decreaseFund", accountController.decreaseFund);
router.get("/getFund/:userId", accountController.getFund);
router.get("/getUserId/:username", accountController.getUserId);

module.exports = router;




