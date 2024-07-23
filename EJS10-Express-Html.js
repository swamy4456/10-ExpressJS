const http = require("http");
//create server object
const server = http.createServer(
    (req, res) => {
        res.setHeader('Content-Type','text/html'); //or res.write(200,{'Content-Type' : 'text/html'});
        res.write(`<html>`);
        res.write(`<head><title>ExpressJS Framework </title></head>`);
        res.write(`<body><h2>Hello from Node.js server! karthik</h2></body>`);
        res.write(`</html>`);
        res.end();
});
server.listen(8000,()=>{
    console.log("Server is running on port 8000");
})