let mongoose = require("mongoose");

mongoose.pluralize(null);

let accountSchema = mongoose.Schema({
    fname:{type:String},
    lname:{type:String},
    email:{type:String,unique:true},
    password:{type:String},
    DOB:{type:String},
    phone:{type:Number},
    address:{type:String},
    type:{type:String},
    fund:{type:Number},
    lock:{type:Boolean}
});

let accountModel = mongoose.model("Account",accountSchema);

module.exports=accountModel;