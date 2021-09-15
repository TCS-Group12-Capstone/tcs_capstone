let mongoose = require("mongoose");
mongoose.pluralize(null); 

let cartSchema = mongoose.Schema({
    userId : String,
    productId : String,
    quantity : Number
})

let cartModel = mongoose.model("Cart", cartSchema);

module.exports = cartModel;