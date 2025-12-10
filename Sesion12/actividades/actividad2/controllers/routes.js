var express = require('express');
var bodyParser = require('body-parser');
var Product = require('../models/products');
var router = express.Router();

// Configuración de body-parser para manejar solicitudes JSON
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// Middleware para imprimir cada solicitud
router.use(function (req, res, next) {
  console.log('Request received');
  next();
});

// Rutas para manejar productos
router.route('/products')
  // Crear un producto
  .post(async function (req, res) {
    try {
      // Crear un nuevo producto
      var product = new Product();
      product.name = req.body.name;
      product.amount = req.body.amount;
      product.description = req.body.description;

      // Guardar el producto en la base de datos
      await product.save();

      // Responder con éxito
      res.json({ message: "Producto registrado con éxito" });
    } catch (error) {
      // Manejo de errores
      res.status(500).send("Error en el servicio: " + error);
    }
  })
  // Obtener todos los productos
  .get(async function (req, res) {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(500).send("Error en el servicio: " + error);
    }
  });

module.exports = router;
