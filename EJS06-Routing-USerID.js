const myexpress=require("express");
const app=myexpress();
const port=3000;
app.get('/user/:id',(req,res)=>{
    res.send(`User id: ${req.params.id}`);
});
app.listen(port,()=>{
    console.log("server running at port : "+port);
});