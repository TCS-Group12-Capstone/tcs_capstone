let express = require("express")
let mongoose = require("mongoose")
let cors = require("cors")
let bodyParser = require("body-parser")
let accountRouter = require("./router/account.router");
let reportsRouter = require("./router/report.router")
let productRouter = require("./router/product.router");
let cartRouter = require("./router/cart.router");
let requestRouter = require("./router/request.router");

const { request } = require("express");

let app = express();

app.use(cors());
app.use(bodyParser.json())

let url = "mongodb+srv://phu:XBMQocHQxxpBqRUW@cluster0.3xrre.mongodb.net/testDB?retryWrites=true&w=majority";

mongoose.connect(url).then(res => console.log("connected")).catch(error => console.log(error));

//http://localhost:1020/api/employee/addEmployee 
//http://localhost:1020/api/employee/deleteEmployee 
app.use("/api/employee", accountRouter);

//http://localhost:1020/api/user/signIn 
//http://localhost:1020/api/user/signUp 
app.use("/api/user",accountRouter);


//http://localhost:1020/api/reports/getAllReports
//http://localhost:1020/api/reports/getDailyReports
//http://localhost:1020/api/reports/getWeeklyReports
//http://localhost:1020/api/reports/getMonthlyReports
//http://localhost:1020/api/reports/getProductReports
//http://localhost:1020/api/reports/getCustomerReports
app.use("/api/reports",reportsRouter);


//http://localhost:1020/api/requests/send-requests
app.use("/api/requests", requestRouter);

//http://localhost:1020/api/product/getAllProducts
app.use("/api/product", productRouter);

//http://localhost:1020/api/cart/addCart
//http://localhost:1020/api/cart/getCart/userId
app.use("/api/cart", cartRouter);

app.listen(1020, () => console.log("Server running on port number 1020"))

