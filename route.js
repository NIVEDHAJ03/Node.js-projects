const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url==="/"){
    res.write("<h1>hello welcome node js</h1>");}
    else if(req.url==='/about'){
        res.write("<h1>this is about route</h1>");
    }
     else if(req.url==='/contact'){
        res.write("<h1>this is contact route</h1>");
    }
    else{
        res.write("<h1>route not found</h1>");
    }
    res.end();
});

server.listen(3000, () => {
    console.log("Server started listening on port 3000");
});
