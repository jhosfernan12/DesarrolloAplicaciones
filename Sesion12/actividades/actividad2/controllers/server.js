var express = require('express');
var app = express();

// Importando la conexión a la base de datos
var db = require('../models/db');

// Importando las rutas
var Router = require('../controllers/routes');

// Definiendo el puerto del servidor
var port = 3000;

// Usando las rutas
app.use('/api', Router);

// Levantando el servidor
app.listen(port, () => {
  console.log("Servidor ejecutándose en el puerto 3000");
});
