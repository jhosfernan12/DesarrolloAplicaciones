// 1. importar paquetes
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');


// 2. crear app de express
const app = express();
app.use(bodyParser.json());


// 3. conexion a mysql
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',         // tu contraseña si tienes
  database: 'barbershop', // o 'biblioteca' si usas ese esquema
  port: 3306  
});


// 4. verificar la conexion
connection.connect((error) => {
  if (error) {
    console.log('Error al conectar a MySQL:', error);
    return;
  }
  console.log('Conexion a MySQL correcta');
});


// 5. endpoint que lista todos los libros
app.get('/books', (req, res) => {
  connection.query('SELECT * FROM books', (error, results) => {
    if (error) throw error;
    res.json(results); // envia JSON
  });
});


// 6. levantar el servidor
app.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});