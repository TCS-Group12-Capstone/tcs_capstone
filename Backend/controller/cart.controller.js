let cartModel = require("../model/cart.model");

let addCart = (request, response) => {
    let product = request.body;

    cartModel.updateOne(
        {$and : [{userId : product.userId}, {productId : product.productId}]}, 
        {$inc : {quantity : product.quantity}},
        {upsert : true},
        (err, result) => {
            if (!err) {
                response.json("Added to cart");
            } else {
                console.send(err); 
            }
    })
}

module.exports = {addCart};