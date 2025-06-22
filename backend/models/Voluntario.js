const mongoose = require('mongoose');

const VoluntarioSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  telefone: { type: String },
  areaInteresse: { type: String },
  disponibilidade: { type: String }
});

module.exports = mongoose.model('Voluntario', VoluntarioSchema);

