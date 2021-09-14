let mongoose = require("mongoose");

mongoose.pluralize(null);

let requestSchema = mongoose.Schema({
    ename: String,
    productName: String,
    restock: Number
});

let requestModel = mongoose.model("SendRequest", requestSchema);

module.exports = requestModel;