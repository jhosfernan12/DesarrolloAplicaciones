// config/connection.js
const mysql = require('mysql');
// crear la conexion a mysql
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',        // tu contraseña si tienes
  database: 'biblioteca',
  port: 3306           // el puerto de MySQL (XAMPP normalmente 3306)
});
// probar la conexion
con.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Conectado exitosamente a la BD');
});
// exportar la conexion
module.exports = con;