var express = require("express");
var app= express();
var port=1000;
app.get("/",(req,res)=>{
    res.send("Hello World from ExpressJS");
});
app.listen(port,()=>{
    console.log("Server is running on port "+port);
});
//npm install express
//nodemon EJS01.js
