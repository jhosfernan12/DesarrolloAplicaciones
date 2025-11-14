const mysql = require('mysql');


const conexion = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'tienda',
  port: 3306
});


conexion.connect(function(err) {
  if (err) {
    console.error('Error de conexión: ' + err.stack);
    return;
  }
  console.log('Conectado con el ID ' + conexion.threadId);
});


conexion.query('SELECT * FROM productos', function(error, results) {
  if (error) throw error;


  console.log(' Productos disponibles:');
  results.forEach(producto => {
    console.log(`ID: ${producto.id} | ${producto.nombre} - S/ ${producto.precio}`);
  });
});


conexion.end();