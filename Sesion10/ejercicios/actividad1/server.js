var http = require('http');


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Bienvenidos al servidor de Kimberly');
}).listen(4000);


console.log('Servidor ejecutándose en http://localhost:4000/');
