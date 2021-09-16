let mongoose = require("mongoose");

mongoose.pluralize(null);

let raiseticketSchema = mongoose.Schema({
    userId: { type: String },
    email: { type: String },
    reason: { type: String }
});

let RaiseTicketModel = mongoose.model("RaisedTicket", raiseticketSchema);

module.exports = RaiseTicketModel;