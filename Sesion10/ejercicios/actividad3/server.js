var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function (req, res) 
{

  if (req.url === '/') 
    {
    fs.readFile(path.join(__dirname, 'index.html'), function (err, html) 
    {
      if (err) {
        res.writeHead(500);
        res.end('Error al cargar la pagina');
      } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(html);
      }
    });
  } 

  else if (req.url === '/about') 
    {
    fs.readFile(path.join(__dirname, 'about.html'), function (err, html) 
    {
      if (err) {
        res.writeHead(500);
        res.end('Error al cargar la pagina');
      } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(html);
      }
    });
  } 

  else if (req.url === '/style.css') 
    {
    fs.readFile(path.join(__dirname, 'style.css'), function (err, css) 
    {
      if (err) 
        {
        res.writeHead(500);
        res.end('Error al cargar los estilos');
      } else {
        res.writeHead(200, {'Content-Type': 'text/css'});
        res.end(css);
      }
    });
  } 

  else {
    res.writeHead(404);
    res.end('Pagina no encontrada');
  }
}).listen(3001, function () 
{
  console.log('Servidor corriendo en http://localhost:3001');
});
