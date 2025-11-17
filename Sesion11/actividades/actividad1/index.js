//importamos los paquetes instalados
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');


//inicializamos express
const app = express();
app.use(bodyParser.json());


//configuracion de la conexión a la base de datos
const conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "barbershop",
    port: 3306
});


//verificar la conexion
conexion.connect(error => {
    if (error) {
        console.log('error en la conexion:', error);
        return;
    }
    console.log('conexion a la base de datos exitosa');
});


//obtenemos los registroa
app.get('/books', (req, res) => {
    const sql = 'SELECT * FROM books';


    conexion.query(sql, (error, results) => {
        if (error) {
            return res.status(500).json({
                error: 'Error al obtener los registros'
            });
        }


        res.json(results);  //devuelve registros en formato JSON
    });
});


//creando servidor
app.listen(3000, () => {
    console.log('ejecutando en http://localhost:3000');
})
