
const { request, response } = require("express");
let accountModel = require("../model/account.model");
let raisedTicketModel = require("../model/raisedTicket.model")

let addEmployee = async (request, response) => {
    let employee = request.body;    // receive the data from post method
    //console.log(employee);

    employee["type"] = "employee"
    let empInfo = await accountModel.findOne({ email: employee.email, type: "employee" });
    console.log(empInfo);
    if (empInfo == null) {

        let result = await accountModel.insertMany(employee);
        response.send("Employee Account created successfully");
    } else {
        response.send("Email Id must be unqiue");
    }
}


let deleteEmployee = (request,response)=>{
    
    let empEmail = request.params.empEmail;

    accountModel.deleteOne({ email: empEmail, type: "employee" }, (err, result) => {
        if (!err) {
            response.send(result)
        } else {
            response.send(err)
        }
    })

}


let signUp = async (request, response) => {
    let user = request.body;
    user["type"] = "user"
    let userExists = await accountModel.findOne({ email: user.email, type: "user" });
    console.log(userExists);
    if (userExists == null) {
        let result = await accountModel.insertMany(user)
        response.send("User Account created successfully");
    } else {
        response.send("User with Email Exists");
    }
}



var signInCount = 3;

let signIn = async (request, response) => {
    let user = request.body;


    let userInfo = await accountModel.findOne({email:user.email,password:user.password,type:"user"});
    
    if(signInCount < 1){
        response.send("Account Locked");
    }else if(userInfo != null){
        response.send("Success");
    }else{
        response.send("Invalid user name or password you have "+ signInCount + " attempt");

        signInCount--;
    }
}


let empSignIn = async (request,response)=>{
    let emp = request.body;
    let empInfo = await accountModel.findOne({email:emp.email,password:emp.password,type:"employee"});
    if(empInfo != null) {
        response.send("Success");
    } else {
        response.send("Login Failed");
    }
}

let updateProfile = async (request, response) => {

    let empEmail = request.body;

    accountModel.updateOne({ fname: empEmail.fname }, { $set: { password: empEmail.password } }, (err, result) => {
        if (!err) {
            response.send({
                result,
                "message": "password has been updated successfully"
            })
        } else {
            response.send(err)
        }
    })
}

let getProfile = (request, response) => {
    let empfname = request.body;

    empfname["type"] = "employee"
    accountModel.findOne({ id: empfname._id, type: "employee" }, (err, data) => {
        if (err) {
            response.status(403).json({ "error": err });
        }
        else {
            response.json({
                "status": "success",
                "profile": data
            })
        }
    })
}

let getFund = (request, response) => {
    let user = request.params.userId; 

    accountModel.findOne(
        {_id : user},
        {_id : 0, fund : 1}, // only get the field "fund"
        (error, result) => {
            if (!error) {
                response.json(result);
            } else {
                response.json(error);
            }
        }
    )
}

let getUserId = (request, response) => {
    let user = request.params.username;

    accountModel.findOne(
        {email : user},
        (error, result) => {
            if (!error) {
                response.json(result);
            } else {
                response.json(error);
            }
        }
    )
}

let decreaseFund = (request, response) => {
    let user = request.body;

    accountModel.updateOne(
        {_id : user.userId},
        {$inc : {fund : -user.amount}},
        (error, result) => {
            if (!error) {
                response.json(result);
            } else {
                response.json(error);
            }
        }
    )
}

let verifyEmailAddress = (request, response) => {
    let ticket = request.body;

    accountModel.findOne(
        {$and : [{email : ticket.email}, {type : "user"}]},
        (error, account) => {
            if (!error) {
                if (account == null) {
                    response.json(ticket.email + " is not registered in our system!");
                } else {

                    if (!account.lock) {
                        response.json("Account is not locked!");
                    } else {
                        response.json("Ticket sent successfully");

                        raisedTicketModel.insertMany({
                            userId : account._id,
                            email : account.email,
                            reason : ticket.reason
                        }), (insertError, insertResult) => {
                            if (insertError) {
                                response.json(insertError);
                            }
                        }
                    }
                }
            } else {
                response.json(error);
            }
        }
    )
}

module.exports = { 
    addEmployee, deleteEmployee, signUp, 
    signIn, updateProfile, getProfile, 
    empSignIn, getFund, getUserId, decreaseFund,
    verifyEmailAddress
}
