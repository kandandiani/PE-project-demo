var http = require('http');
http.createServer(function (request, response) {
  response.writeHead(200, {
    "Content-Type": 'text/html; charset=utf-8'
  });
  response.write('我是你大爷');
  response.end();
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');