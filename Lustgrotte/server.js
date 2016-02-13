//var http = require('http');
//var port = process.env.port || 1337;
var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic('\Website\index.htm')).listen(8090);

//http.createServer(function (req, res) {

//    res.writeHead(200, { 'Content-Type': 'text/plain' });
//    //res.end('Hello Worlds\n');
//}).listen(port);