let express = require("express")
let mongoose = require("mongoose")
let cors = require("cors")
let bodyParser = require("body-parser")
let accountRouter = require("./router/account.router");
let productRouter = require("./router/product.router");
let cartRouter = require("./router/cart.router");

let app = express();

app.use(cors());
app.use(bodyParser.json())


let url = "mongodb+srv://phu:XBMQocHQxxpBqRUW@cluster0.3xrre.mongodb.net/testDB?retryWrites=true&w=majority";


mongoose.connect(url).then(res=>console.log("connected")).catch(error=>console.log(error));


//http://localhost:1020/api/employee/addEmployee 
//http://localhost:1020/api/employee/deleteEmployee 
app.use("/api/employee",accountRouter);


//http://localhost:1020/api/user/signIn 
//http://localhost:1020/api/user/signUp 
app.use("/api/user",accountRouter);


//http://localhost:1020/api/product/getAllProducts
app.use("/api/product",productRouter);

//http://localhost:1020/api/cart/addCart
app.use("/api/cart",cartRouter);

app.listen(1020,()=>console.log("Server running on port number 1020"))
















