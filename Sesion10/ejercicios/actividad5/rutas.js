var express = require('express');
var router = express.Router();


// Estilo base para todas las páginas
const estilos = `
  <style>
    body { font-family: Arial; background-color: #ffe6f2; text-align: center; padding: 40px; }
    h1 { color: #d63384; }
    a, button {
      display: inline-block;
      margin: 10px;
      padding: 10px 15px;
      text-decoration: none;
      background-color: #ff66b2;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    a:hover, button:hover { background-color: #e60073; }
  </style>
`;


// Ruta principal
router.get('/', function(req, res) {
  res.send(`
    ${estilos}
    <h1>Página de Inicio</h1>
    <button onclick="location.href='/contacto'">Ir a Contacto</button>
    <button onclick="location.href='/servicios'">Ver Servicios</button>
  `);
});


// Ruta contacto
router.get('/contacto', function(req, res) {
  res.send(`
    ${estilos}
    <h1>Contacto</h1>
    <p>Escríbenos cuando quieras </p>
    <p><strong>Correo:</strong> belentorreszelio@gmail.com</p>
    <p><strong>Teléfono:</strong> 900102574</p>
    <p><strong>Dirección:</strong> XXXX XXXX</p>
    <button onclick="location.href='/'">Volver al Inicio</button>
  `);
});


// Ruta servicios
router.get('/servicios', function(req, res) {
  res.send(`
    ${estilos}
    <h1>Servicios</h1>
    <button onclick="location.href='/servicios/web'">Desarrollo Web</button>
    <button onclick="location.href='/servicios/diseno'">Diseño Gráfico</button>
    <br>
    <button onclick="location.href='/'">Volver al Inicio</button>
  `);
});


// Ruta servicio 1
router.get('/servicios/web', function(req, res) {
  res.send(`
    ${estilos}
    <h1>Desarrollo Web</h1>
    <p>Creamos páginas modernas y responsivas.</p>
    <button onclick="location.href='/servicios'">Volver a Servicios</button>
  `);
});


// Ruta servicio 2
router.get('/servicios/diseno', function(req, res) {
  res.send(`
    ${estilos}
    <h1>Diseño Gráfico</h1>
    <p>Logotipos, banners y más en estilo creativo.</p>
    <button onclick="location.href='/servicios'">Volver a Servicios</button>
  `);
});


module.exports = router;