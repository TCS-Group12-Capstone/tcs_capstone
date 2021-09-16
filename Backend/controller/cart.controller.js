let cartModel = require("../model/cart.model");

let addCart = (request, response) => {
    let product = request.body;

    cartModel.updateOne(
        {$and : [
            {userId : product.userId}, 
            {productId : product.productId},
            {productName : product.productName}
        ]},  // filter
        {$inc : {quantity : product.quantity}}, // increment the quantity
        {upsert : true},    // allow to insert a new document on the first add
        (error, result) => {
            if (!err) {
                response.json(result);
            } else {
                console.json(error); 
            }
    })
}

let getCart = (request, response) => {
    let user = request.params.userId;

    cartModel.find(
        {userId : user},    // filter by userId
        (error, result) => {
            if (!error) {
                response.json(result);
            } else {
                response.json(error);
            }
    })
}

let deleteCart = (request, response) => {
    let product = request.body;

    cartModel.deleteOne(
        {$and : [{userId : product.userId}, {productId : product.productId}]},
        (error, result) => {
            if (!error) {
                response.json(result);
            } else {
                response.json(error);
            }
        }
    )
}

let decrementCart = (request, response) => {
    let product = request.body;

    cartModel.updateOne(
        {$and : [{userId : product.userId}, {productId : product.productId}]},
        {$inc : {quantity : product.quantity}},
        (error, result) => {
            if (!error) {
                response.json(result);
            } else {
                response.json(error);
            }
        }
    )
}

module.exports = {addCart, getCart, decrementCart, deleteCart};