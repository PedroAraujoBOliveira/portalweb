const mongoose = require('mongoose');

const PalestraSchema = new mongoose.Schema({
  data: Date,
  local: String,
  tema: String
});

module.exports = mongoose.model('Palestra', PalestraSchema);
