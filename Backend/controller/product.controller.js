let productModel = require("../model/product.model");

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

module.exports = { getProductDetails };