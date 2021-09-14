let mongoose = require("mongoose");

mongoose.pluralize(null);

let employeeSchema = mongoose.Schema({
    fname:{type:String},
    lname:{type:String},
    email:{type:String,unique:true},
    password:{type:String},
    type:{type:String}
});

let employeeModel = mongoose.model("Account",employeeSchema);

module.exports=employeeModel;