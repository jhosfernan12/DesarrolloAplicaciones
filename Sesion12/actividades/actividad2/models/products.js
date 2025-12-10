var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Definiendo el esquema para la colección "products"
var ProductSchema = new Schema({
  name: String,
  amount: Number,
  description: String
});

// Exportando el modelo
module.exports = mongoose.model('Product', ProductSchema);
