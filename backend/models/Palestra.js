const mongoose = require('mongoose');

const PalestraSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  data: { type: Date, required: true },
  local: { type: String, required: true },
  descricao: { type: String }
});

module.exports = mongoose.model('Palestra', PalestraSchema);
