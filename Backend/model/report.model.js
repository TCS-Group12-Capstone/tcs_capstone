let mongoose = require("mongoose");

mongoose.pluralize(null);

let reportSchema = mongoose.Schema({
    itemId:{type:String},
    customerId:{type:String},
    date:{type:Date}
});

let reportModel = mongoose.model("Reports",reportSchema);

module.exports = reportModel;