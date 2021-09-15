let cartModel = require("../model/cart.model");

let addCart = (request, response) => {
    let product = request.body;

    cartModel.updateOne(
        {$and : [{userId : product.userId}, {productId : product.productId}]},  // filter
        {$inc : {quantity : product.quantity}}, // increment the quantity
        {upsert : true},    // allow to insert a new document on the first add
        (err, result) => {
            if (!err) {
                response.json("Added to cart");
            } else {
                console.json(err); 
            }
    })
}

module.exports = {addCart};