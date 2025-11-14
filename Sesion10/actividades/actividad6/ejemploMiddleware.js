// importando express
const express = require('express');
// creando app
const app = express();

// middleware simple
const middleware = (req, res, next) => 
{
    console.log('ejecutando el middleware mientras llega peticion');
    next(); // sigue a la ruta
};

// usar middleware para todas las rutas
app.use(middleware);
// ruta principal
app.get('/', (req, res) => 
{
    res.send('llego peticion al servidor');
});

app.get('/info', (req, res) => 
{
    res.send('ruta info');
});

// levantar servidor
app.listen(3000, () => 
{
    console.log('servidor en http://localhost:3000');
});