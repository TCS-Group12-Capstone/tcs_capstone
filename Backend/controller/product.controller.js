let productModel = require("../model/product.model");

let getAllProductDetails = (request, response) => {
    productModel.find({}, (err, data) => {
        if (!err) {
            response.json(data);
        } else {
            response.json(err);
        }
    })
}

module.exports = {getAllProductDetails};