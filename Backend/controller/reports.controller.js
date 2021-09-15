let reportsModel = require ("../model/report.model")


let getAllreports = (request,response)=> {

    reportsModel.find({},(err,data) => {
        if(!err){
            response.json(data);
        }else {
             response.json(err);   
        }
    })

}

module.exports = { getAllreports }



