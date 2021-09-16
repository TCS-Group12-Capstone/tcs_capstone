let mongoose = require("mongoose");
mongoose.pluralize(null);

let raisedTicketSchema = mongoose.Schema({
    userId : String,
    email : String,
    reason : String
})

let raisedTicketModel = mongoose.model("RaisedTicket", raisedTicketSchema);

module.exports = raisedTicketModel;