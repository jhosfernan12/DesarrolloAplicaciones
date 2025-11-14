var express = require('express');
var path = require('path');
var app = express();


app.use('/css', express.static(path.join(__dirname, 'public', 'css')));
app.use('/img', express.static(path.join(__dirname, 'public', 'img')));


app.get('/', function(req, res) {
    res.send(`
        <!DOCTYPE html>
        <html lang="es">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Experiencia 4 ejemplo propio</title>
                <link rel="stylesheet" href="/css/style.css">
            </head>
            <body>
                <div class="wrap">
                    <h3>Exponentes del subgenero:</h3>
                    <h1>Neue Deutsche Härte </h1>
                    <h3>EJEMPLO PROPIO DE LA EXPERIENCIA 04</h3>
                    <div class="cards">
                        <div class="card">
                            <img src="/img/eisbrecher.png" alt="Eisbrecher">
                            <h2>Eisbrecher</h2>
                        </div>
                        <div class="card">
                            <img src="/img/megaherz.png" alt="Megaherz">
                            <h2>Megaherz</h2>
                        </div>
                        <div class="card">
                            <img src="/img/rammstein.png" alt="Rammstein">
                            <h2>Rammstein</h2>
                        </div>
                        <div class="card">
                            <img src="/img/heldmaschine.png" alt="Heldmaschine">
                            <h2>Heldmaschine</h2>
                        </div>
                        <div class="card">
                            <img src="/img/stahlmann.png" alt="Stahlmann">
                            <h2>Stahlmann</h2>
                        </div>
                        <div class="card">
                            <img src="/img/oomph.png" alt="Oomph!">
                            <h2>Oomph!</h2>
                        </div>
                        <div class="card">
                            <img src="/img/die.png" alt="Die!">
                            <h2>Die!</h2>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    `);
});

app.listen(3000, function() {
    console.log('Servidor funcionando en http://localhost:3000');
});