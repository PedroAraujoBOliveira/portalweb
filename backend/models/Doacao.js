const mongoose = require('mongoose');

const DoacaoSchema = new mongoose.Schema({
  tipo: String,
  doador: String,
  data: Date
});

module.exports = mongoose.model('Doacao', DoacaoSchema);
