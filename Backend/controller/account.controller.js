
const { request, response } = require("express");
let accountModel = require("../model/account.model");

let addEmployee = async (request,response)=> {
    let employee = request.body;    // receive the data from post method
    //console.log(employee);
    employee["type"]="employee"
    let empInfo = await accountModel.findOne({email:employee.email,type:"employee"});
    console.log(empInfo);
    if(empInfo == null){
        let result = await accountModel.insertMany(employee);
        response.send("Employee Account created successfully");
    }else {
        response.send("Email Id must be unqiue");
    }    
}

let deleteEmployee = (request,response)=>{

    let empEmail = request.params.empEmail;

    accountModel.deleteOne({email:empEmail,type:"employee"},(err,result)=>{
        if(!err){
            response.send(result)
        }else{
            response.send(err)
        }
    })

}


let signUp = async (request,response)=>{
    let user = request.body;
    user["type"]="user"
    let userExists = await accountModel.findOne({email:user.email,type:"user"});
    console.log(userExists);
    if(userExists == null){
        let result = await accountModel.insertMany(user)
        response.send("User Account created successfully");
    }else {
        response.send("User with Email Exists");
    } 
}



var signInCount = 3;

let signIn = async (request,response)=>{
    let user = request.body;

    let userInfo = await accountModel.findOne({email:user.email,password:user.password,type:"user"});
    console.log(userInfo)
    if(signInCount < 1){
        response.send("Account Locked");
    }else if(userInfo != null){
        response.send("User Sign In successfully");
    }else{
        
        console.log(signInCount);
        response.send("Invalid user name or password you have "+ signInCount + " attempt");
        signInCount--;
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



module.exports={addEmployee,deleteEmployee,getAllreports, signUp,signIn}
