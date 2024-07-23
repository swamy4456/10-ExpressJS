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
app.get("/home",(req,res)=>{
    res.send("Display from Home page: Nune Swamy Karthik");
})
app.get("/login",(req,res)=>{
    res.send("Display from Login page: Nune Swamy Karthik");
})
app.get("/reg",(req,res)=>{
    res.send("Display from reg page: Registration form");
})
app.listen(port,()=>{
    console.log("Server is running on port "+port);
})