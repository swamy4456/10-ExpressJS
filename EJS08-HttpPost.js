const myexpress = require("express");
const app=myexpress();
const port=4000;
app.use(myexpress.json());
app.post('/user',(req,res)=>{
    res.send(`Hello,${req.body.name}`);
});
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
//run the server
//after,post on the postman and select post,body->raw->json
/*{
    "name" : "karthik"
}*/
//paste url:http://localhost:4000/user and send then 
//the answer is Hello,Karthik