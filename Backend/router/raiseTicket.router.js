let express = require("express");
let router = express.Router();

let raiseTicketController = require("../controller/raiseTicket.controller");

router.get("/getAllRaiseTicket", raiseTicketController.getAllRaiseTicket);
router.put("/unlockUser", raiseTicketController.unlockUser);
router.put("/deleteRaiseTicket", raiseTicketController.deleteRaiseTicket);

module.exports = router;