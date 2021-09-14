
let accountModel = require("../model/account.model");

let addEmployee = async (request,response)=> {
    let employee = request.body;    // receive the data from post method
    //console.log(employee);
    employee["type"]="employee"
    let empInfo = await accountModel.findOne({email:employee.email});
    if(empInfo == null){
        let result = await accountModel.insertMany(employee);
        response.send("Employee Account created successfully");
    }else {
        response.send("Email Id must be unqiue");
    }    
}

let deleteEmployee = (request,response)=>{

    let empEmail = request.params.empEmail;

    accountModel.deleteOne({email:empEmail},(err,result)=>{
        if(!err){
            response.send(result)
        }else{
            response.send(err)
        }
    })

}


let signUp = (request,response)=>{
    let user = request.body;
    let userInfo = accountModel.findOne({email:user.email});
    if(userInfo == null){
        let result = accountModel.insertMany(user)
    }
}










let getAllreports = (request,response)=> {

    accountModel.find({},(err,data)=> {
        if(!err){
            response.json(data);
        }else {
             response.json(err);   
        }
    })

}



module.exports={addEmployee,deleteEmployee,getAllreports}
