const reportModel = require("../model/report.model");
let reportsModel = require ("../model/report.model")


let getAllReports = (request,response)=> {

    reportsModel.find({},(err,data) => {
        if(!err){
            response.json(data);
        }else {
             response.json(err);   
        }
    })

}


let getDailyReport = (request,response)=> {
    let today = new Date();
    today.setHours(0,0,0,0,0)
    console.log(today)
    today.setDate(today.getDate() - 1)
    reportsModel.find({date:{$gt:today}},(err,data) => {
        if(!err){
            response.json(data);
        }else {
             response.json(err);   
        }
    })

}


let getMonthlyReports = (request,response)=> {
    let d = new Date();
    d.setHours(0,0,0,0,0)
    d.setDate(d.getDate() - 30);
    console.log(d)
    reportsModel.find({date:{ $gte: d }},(err,data) => {
        if(!err){
            response.json(data);
        }else {
             response.json(err);   
        }
    })

}

let getWeeklyReports = (request,response)=> {

    let d = new Date();
    d.setDate(d.getDate() - 7);
    // let week = d.toLocaleDateString();

    reportsModel.find({date:{$gt:new Date(d)}},(err,data) => {
        if(!err){
            response.json(data);
        }else {
             response.json(err);   
        }
    })

}


let getProductReports = (request,response)=> {
    let itmId = request.body;
    reportsModel.find({itemId:itmId.id},(err,data) => {
        if(!err){
            response.json(data);
        }else {
             response.json(err);   
        }
    })

}




let getCustomerReports = (request,response)=> {
    let itmId = request.body;
    reportsModel.find({itemId:itmId.id},(err,data) => {
        if(!err){
            response.json(data);
        }else {
             response.json(err);   
        }
    })

}

let insert = (request, response) => {
    let product = request.body;

    reportModel.insertMany(product, (result, error) => {
        if (!error) {
            response.json(result);
        } else {
            response.json(error);
        }
    })
}

module.exports = {getAllReports, getDailyReport,
    getMonthlyReports, getWeeklyReports,
    getCustomerReports, getProductReports, insert}




