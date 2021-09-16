let productModel = require("../model/product.model");

let getAllProductDetails = (request, response) => {
    productModel.find(
        {},   
        (err, data) => {
            if (!err) {
                response.json(data);
            } else {
                response.json(err);
            }
        })
}
 

let getProductDetails = (request, response) => {
    let filter = request.body;

    productModel.find(
        {_id: {$in: filter}},    // find in the array of product ID
        (err, data) => {
            if (!err) {
                response.json(data);
            } else {
                response.json(err);
            }
        })
}

let decreaseAmount = (request, response) => {
    let product = request.body;

    productModel.updateOne(
        {_id : product._id},
        {$inc : {quantity : -product.amount}},
        (result, error) => {
            if (!error) {
                response.json(result);
            } else {
                response.json(error);
            }
        }
    )
}

module.exports = {getAllProductDetails, getProductDetails, decreaseAmount};