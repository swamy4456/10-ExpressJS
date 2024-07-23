const myexpress=require("express");
const app=myexpress();
const port=3000;
app.use(myexpress.static('public'));
app.listen(port,()=>{
    console.log("server is running on port "+port);
})