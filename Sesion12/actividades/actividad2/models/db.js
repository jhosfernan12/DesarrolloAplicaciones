var mongoose = require('mongoose');

// Estableciendo la conexión con MongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/node-crud', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.log('Error al conectar a MongoDB: ', err));
