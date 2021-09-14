
let employeeModel = require("../model/empoyee.model");

let addEmployee = async (request,response)=> {
    let employee = request.body;    // receive the data from post method
    //console.log(employee);
    employee["type"]="employee"
    let empInfo = await employeeModel.findOne({email:employee.email});
    if(empInfo == null){
        let result = await employeeModel.insertMany(employee);
        response.send("Account created successfully");
    }else {
        response.send("Email Id must be unqiue");
    }    
}

let deleteEmployee = (request,response)=>{

    let empEmail = request.params.empEmail;

    employeeModel.deleteOne({email:empEmail},(err,result)=>{
        if(!err){
            response.send(result)
        }else{
            response.send(err)
        }
    })

}

let getAllreports = (request,response)=> {

    employeeModel.find({},(err,data)=> {
        if(!err){
            response.json(data);
        }else {
             response.json(err);   
        }
    })

}




module.exports={addEmployee,deleteEmployee,getAllreports}