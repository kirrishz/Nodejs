var http = require('http');
http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/html'});
res.write('Welcome to Uki. I am Kirrishz');
res.end();
}).listen(8000);
