
//instantiate server
const express = require("express");

const app = express();

require("dotenv").config();

//define port

const port = process.env.PORT || 4000;

//use middleware for parsing

app.use(express.json());

//include routes
const blog = require("./Routes/blog");

//mount
app.use("/api/v1",blog);

//connect with DATABASE

const dbConnect = require("./config/database");

dbConnect();

//start server
app.listen(port,()=>{
    console.log(`server started at port : ${port}`);
})

//default route
app.get("/",(req,res)=>{
    res.send("<h1>This is Homepage</h1>")
})
