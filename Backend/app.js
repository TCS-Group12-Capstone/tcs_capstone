let express = require("express")
let mongoose = require("mongoose")
let cors = require("cors")
let bodyParser = require("body-parser")
let employeeRouter = require("./router/employee.router");

let app = express();

app.use(cors());
app.use(bodyParser.json())


let url = "mongodb+srv://phu:XBMQocHQxxpBqRUW@cluster0.3xrre.mongodb.net/testDB?retryWrites=true&w=majority";


mongoose.connect(url).then(res=>console.log("connected")).catch(error=>console.log(error));


//http://localhost:1020/api/product/addEmployee 
//http://localhost:1020/api/product/deleteEmployee 
app.use("/api/employee",employeeRouter);

app.listen(1020,()=>console.log("Server running on port number 1020"))
















