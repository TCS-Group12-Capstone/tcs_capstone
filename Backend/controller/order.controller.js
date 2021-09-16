let orderModel = require("../model/order.model");

let create = (request, response) => {
    let order = request.body; 

    orderModel.insertMany(order, (result, error) => {
        if (!error) {
            response.json(result);
        } else {
            response.json(error);
        }
    })
}

module.exports = {create};