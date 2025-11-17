// Importar Express
var express = require('express');


// Crear aplicación
var app = express();


// Importar rutas desde rutas.js
var rutas = require('./rutas.js');


// Usarlas en la app
app.use('/', rutas);


// Servidor escuchando en puerto 3000
app.listen(3000, function() {
  console.log('La aplicación está funcionando en el puerto 3000');
});