const { response } = require("express");
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
let getOrders = (request, response) => {
    orderModel.find({}, (err, result) => {
        if (!err) {
            response.send(result);
        } else {
            response.send(err)
        }
    })
}

let updateOrderStatus = (request, response) => {
    console.log(request.body);
    const id = request.body._id
    orderModel.findByIdAndUpdate(id, {
        $set: request.body
    }, (err, data) => {
        if (err) {
            throw err
        } else {
            response.json(data);
            console.log("Order Status Updated Successfully!");
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

let getStatus = async (request, response) => {
    let order = request.body;
    orderInfo = await orderModel.findOne({ tracking: order.tracking});
    response.send({status:orderInfo.status});
}

module.exports = {create, getTracking, getStatus, getOrders, updateOrderStatus };
