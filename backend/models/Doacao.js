const mongoose = require('mongoose');

const DoacaoSchema = new mongoose.Schema({
  nomeDoador: { type: String, required: true },
  tipo: { type: String, required: true },
  quantidade: { type: Number, required: true },
  data: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Doacao', DoacaoSchema);

