let mongoose = require("mongoose");
mongoose.pluralize(null); 

let productSchema = mongoose.Schema({
    name : String,
    price : Number,
    quantity : Number
})

let productModel = mongoose.model("Product", productSchema);

module.exports = productModel;