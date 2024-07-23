var myexpress = require("express");
var app = myexpress();
var port= 7000;
app.get("/",(req,res)=>{
    res.send("Hello World from Expressjs : karthik");
});
app.get("/about",(req,res)=>{
    res.send("Display from about page: Karthik");
});
app.get("/contact",(req,res)=>{
    res.send("Display from contact page: 9640949109");
})
app.listen(port,()=>{
    console.log("Server is running on port "+port);
})