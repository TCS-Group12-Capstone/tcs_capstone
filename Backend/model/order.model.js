let mongoose = require("mongoose");
mongoose.pluralize(null);

let orderSchema = mongoose.Schema({
    userId : String,
    status : String,
    tracking : String,
    productName : String,
    quantity : Number,
    date : Date
})

let orderModel = mongoose.model("Order", orderSchema);

module.exports = orderModel;