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

let getCart = (request, response) => {
    let user = request.params.userId;

    cartModel.find(
        {userId : user},    // filter by userId
        (result, err) => {
            if (!err) {
                response.json(result);
            } else {
                response.json(err);
            }
    })
}

module.exports = {addCart, getCart};