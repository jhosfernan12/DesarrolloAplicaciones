// routes/books.js
const express = require('express');
const appRouter = express.Router();


const con = require('../config/connection'); // sube un nivel y entra a config


const bodyParser = require('body-parser');
appRouter.use(bodyParser.urlencoded({ extended: true }));
appRouter.use(bodyParser.json());


// sentencias para los procedimientos almacenados
let sql_all = 'CALL usp_listar_books()';
let sql_insert = 'CALL usp_insertar_books(?,?,?)';


// endpoint GET: lista todos los libros usando el procedimiento
appRouter.get('/books', (req, res) => {
  con.query(sql_all, (error, results) => {
    if (error) {
      throw error;
    }
    // results[0] trae solo las filas del procedimiento
    res.send(results[0]);
  });
});


// endpoint POST: inserta un libro usando el procedimiento
appRouter.post('/books', (req, res) => {
  const book = {
    title: req.body.book_title,
    author: req.body.book_author,
    publicado: req.body.book_published
  };


  con.query(sql_insert, [book.title, book.author, book.publicado], (error, results) => {
    if (error) {
      throw error;
    }
    res.send('Libro insertado correctamente');
  });
});


// exportar el router
module.exports = appRouter;