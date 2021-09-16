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
    let today = new Date().toLocaleDateString()
    console.log(today)
    reportsModel.find({date:today},(err,data) => {
        if(!err){
            response.json(data);
        }else {
             response.json(err);   
        }
    })

}


let getMonthlyReports = (request,response)=> {

    reportsModel.find({},(err,data) => {
        if(!err){
            response.json(data);
        }else {
             response.json(err);   
        }
    })

}

let getWeeklyReports = (request,response)=> {

    reportsModel.find({},(err,data) => {
        if(!err){
            response.json(data);
        }else {
             response.json(err);   
        }
    })

}


let getCustomerReports = (request,response)=> {

    reportsModel.find({},(err,data) => {
        if(!err){
            response.json(data);
        }else {
             response.json(err);   
        }
    })

}


let getProductReports = (request,response)=> {

    reportsModel.find({},(err,data) => {
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



