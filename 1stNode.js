var http = require('http');
var http = require('http');
//create a server object:

http.createServer(function (req, res) {

res.write('Hello World!'); //write a response to the
res.write('Hello World2!');

res.end(); //end the response

}).listen(8080); //the server object listens on port
