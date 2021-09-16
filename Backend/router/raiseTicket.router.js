let express = require("express");
let router = express.Router();

let raiseTicketController = require("../controller/raiseTicket.controller");

router.get("/unlockUser", raiseTicketController.getAllRaiseTicket);
router.put("/unlock/:id", raiseTicketController.unlockUser);

module.exports = router;