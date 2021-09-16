let orderModel = require("../model/order.model");

let create = (request, response) => {
    let order = request.body; 

    orderModel.insertMany(order, (error, result) => {
        if (!error) {
            response.json(result);
        } else {
            response.json(error);
        }
    })
}

let getTracking = async (request, response) => {
    let order = request.body;
    let orderInfo = await orderModel.findOne({ tracking: order.tracking});
    if (orderInfo != null) {
        response.send({msg:"found"});
    } else {
        response.send({msg:"failed"});
    }
}

module.exports = {create, getTracking};