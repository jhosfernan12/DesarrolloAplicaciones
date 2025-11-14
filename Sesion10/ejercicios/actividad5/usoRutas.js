var express = require('express');
var app = express();


// Importar rutas
var rutas = require('./rutas');


// Usar rutas
app.use('/', rutas);


// Iniciar servidor
app.listen(3000, function() {
  console.log('Servidor funcionando en http://localhost:3000');
});