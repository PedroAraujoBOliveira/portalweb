const mongoose = require('mongoose');
require('dotenv').config();
const Admin = require('./models/Admin');

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    const usuario = 'admin';
    const senha = 'admin123'; // altere depois se necessário

    const existe = await Admin.findOne({ usuario });
    if (existe) {
      console.log('Admin já existe.');
    } else {
      await Admin.create({ usuario, senha });
      console.log('Admin criado com sucesso!');
    }
    mongoose.disconnect();
  })
  .catch(err => console.error('Erro ao conectar:', err));