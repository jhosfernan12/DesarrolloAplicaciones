const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();


app.use(express.json()); // para parsear JSON en body si se necesita


app.get('/api', (req, res) => {
  res.json({ mensaje: "Esta es la Data de Clientes" });
});


// Endpoint protegido (se cambia luego para usar verifiToken)
app.post('/api/posts', verifiToken, (req, res) => {
  jwt.verify(req.token, 'secretkey', (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        mensaje: 'Post Creado',
        authData
      });
    }
  });
});


// Login - genera token
app.post('/api/login', (req, res) => {
  const user = {
    id: 1,
    username: "aruiz",
    email: "aruiz@gmail.com"
  };


  jwt.sign({ user }, 'secretkey', { expiresIn: '30s' }, (err, token) => {
    if (err) {
      return res.status(500).json({ error: 'Error al generar token' });
    }
    res.json({ token });
  });
});


// Middleware para obtener token del header Authorization
function verifiToken(req, res, next) {
  const bearerHeader = req.headers['authorization'];
  if (typeof bearerHeader !== 'undefined') {
    // bearerHeader tiene aspecto "Bearer <token>"
    const parts = bearerHeader.split(' ');
    if (parts.length === 2) {
      const bearerToken = parts[1];
      req.token = bearerToken;
      next();
    } else {
      res.sendStatus(403);
    }
  } else {
    res.sendStatus(403);
  }
}


app.listen(5000, () => console.log("Servidor está ejecutándose en el puerto 5000"));