var express = require('express')
let requestModel = require("../model/request.model");

let Request = (req, res) => {
    var request = new requestModel({
        ename: req.body.ename,
        productName: req.body.productName,
        restock: req.body.restock
    })
    requestModel.create(request, (err) => {
        if (err) {
            res.status(400).json({ "message": "cannot send the request", "error": err });
        } else {
            res.status(201).json({
                "status": "success",
                "message": "request sent successfully"
            })
        }
    })
};

module.exports = { Request };