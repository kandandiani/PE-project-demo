var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/html;charset=UTF-8'
  })
  console.log(req.url);
  res.write('张三啊');
  if (req.url !== '/favicon.ico') {
    let parse = url.parse(req.url, true);
    console.log(parse.query.name);

  }
  res.end()
}).listen(8000)