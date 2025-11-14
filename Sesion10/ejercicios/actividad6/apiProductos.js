// importar express
const express = require('express');


// crear app
const app = express();


// middleware para leer json
app.use(express.json());


// logger simple
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});


// datos en memoria (sin bd)
let productos = [
  { id: 1, nombre: 'mouse', precio: 50 },
  { id: 2, nombre: 'teclado', precio: 80 }
];


// listar todos
app.get('/productos', (req, res) => {
  res.json(productos);
});


// obtener uno por id
app.get('/productos/:id', (req, res) => {
  const id = Number(req.params.id);
  const p = productos.find(x => x.id === id);
  if (!p) return res.status(404).json({ mensaje: 'no encontrado' });
  res.json(p);
});


// crear uno
app.post('/productos', (req, res) => {
  const { id, nombre, precio } = req.body;
  if (!id || !nombre || precio == null)
    return res.status(400).json({ mensaje: 'faltan campos' });
  if (productos.some(x => x.id === id))
    return res.status(409).json({ mensaje: 'id duplicado' });
  const nuevo = { id, nombre, precio };
  productos.push(nuevo);
  res.status(201).json({ mensaje: 'creado', data: nuevo });
});


// actualizar
app.put('/productos/:id', (req, res) => {
  const id = Number(req.params.id);
  const i = productos.findIndex(x => x.id === id);
  if (i < 0) return res.status(404).json({ mensaje: 'no encontrado' });
  const { nombre, precio } = req.body;
  if (nombre != null) productos[i].nombre = nombre;
  if (precio != null) productos[i].precio = precio;
  res.json(productos[i]);
});


// eliminar
app.delete('/productos/:id', (req, res) => {
  const id = Number(req.params.id);
  const antes = productos.length;
  productos = productos.filter(x => x.id !== id);
  if (productos.length === antes)
    return res.status(404).json({ mensaje: 'no encontrado' });
  res.json({ mensaje: 'eliminado' });
});


// levantar
app.listen(3006, () => {
  console.log('api en http://localhost:3006');
});