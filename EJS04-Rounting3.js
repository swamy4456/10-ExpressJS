var myexpress = require("express");
var app = myexpress();
var port= 7000;
app.get("/home",(req,res)=>{
    res.send("Display from Home page: Nune Swamy Karthik");
})
app.listen(port,()=>{
    console.log("Server is running on port "+port);
})