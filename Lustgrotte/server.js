var http = require('http');
var port = process.env.port || 1337;

var fs = require('fs');
var index = fs.readFileSync('\Website\index.htm');
http.createServer(function (req, res) {

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(index);
    //res.end('Hello Worlds\n');
}).listen(port);