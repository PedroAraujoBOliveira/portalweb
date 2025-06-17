const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
  usuario: String,
  senha: String // em produção, use hash
});

module.exports = mongoose.model('Admin', AdminSchema);
