var myexpress = require("express");
var app = myexpress();
var port= 7000;
app.get("/",(req,res)=>{
    res.send("Hello World from Expressjs : karthik");
});
app.get("/about",(req,res)=>{
    res.send("Display from about page: Karthik");
});
app.listen(port,()=>{
    console.log("Server is running on port "+port);
})