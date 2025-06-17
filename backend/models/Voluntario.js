const mongoose = require('mongoose');

const VoluntarioSchema = new mongoose.Schema({
  nome: String,
  contato: String,
  area: String
});

module.exports = mongoose.model('Voluntario', VoluntarioSchema);
