const mongoose = require('mongoose');
require('dotenv').config({ path: __dirname + '/.env' });
const Admin = require('./models/Admin');

mongoose.connect(process.env.MONGO_URI).then(async () => {
  const existe = await Admin.findOne({ usuario: 'admin' });
  if (existe) {
    console.log('Admin já existe');
  } else {
    await Admin.create({ usuario: 'admin', senha: 'admin123' });
    console.log('Admin criado com sucesso!');
  }
  mongoose.disconnect();
});
