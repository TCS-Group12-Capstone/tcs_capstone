const { response } = require("express");
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

module.exports = { create, getOrders, updateOrderStatus };