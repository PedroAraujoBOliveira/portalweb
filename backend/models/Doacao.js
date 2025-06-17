const mongoose = require('mongoose');

const DoacaoSchema = new mongoose.Schema({
  tipo: String,
  doador: String,
  data: Date
});

module.exports = mongoose.model('Doacao', DoacaoSchema);

// backend/models/Voluntario.js
const VoluntarioSchema = new mongoose.Schema({
  nome: String,
  contato: String,
  area: String
});

module.exports = mongoose.model('Voluntario', VoluntarioSchema);

// backend/models/Palestra.js
const PalestraSchema = new mongoose.Schema({
  data: Date,
  local: String,
  tema: String
});

module.exports = mongoose.model('Palestra', PalestraSchema);

// backend/models/Admin.js
const AdminSchema = new mongoose.Schema({
  usuario: String,
  senha: String // em produção, use hash de senha
});

module.exports = mongoose.model('Admin', AdminSchema);