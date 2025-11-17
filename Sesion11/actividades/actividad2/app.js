// app.js
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

// importar el router de books
const bookRouter = require('./routes/books');


// prefijo /api para las rutas de books
app.use('/api', bookRouter);

// levantar servidor
app.listen(3000, () => {
  console.log('Servidor de ejecucion en http://localhost:3000');
});