const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.error('Erro ao conectar no MongoDB', err));

const Doacao = require('./models/Doacao');
const Voluntario = require('./models/Voluntario');
const Palestra = require('./models/Palestra');
const Admin = require('./models/Admin');

// POST
app.post('/api/doacoes', async (req, res) => {
  const salvo = await new Doacao(req.body).save();
  res.status(201).json(salvo);
});

app.post('/api/voluntarios', async (req, res) => {
  const salvo = await new Voluntario(req.body).save();
  res.status(201).json(salvo);
});

app.post('/api/palestras', async (req, res) => {
  const salvo = await new Palestra(req.body).save();
  res.status(201).json(salvo);
});

app.post('/api/login', async (req, res) => {
  const { usuario, senha } = req.body;
  const admin = await Admin.findOne({ usuario });
  if (!admin || admin.senha !== senha) return res.status(401).json({ erro: 'Acesso negado' });
  res.status(200).json({ mensagem: 'Login bem-sucedido' });
});

// GET
app.get('/api/doacoes', async (req, res) => res.json(await Doacao.find().sort({ data: -1 })));
app.get('/api/voluntarios', async (req, res) => res.json(await Voluntario.find().sort({ nome: 1 })));
app.get('/api/palestras', async (req, res) => res.json(await Palestra.find().sort({ data: 1 })));

const path = require('path');
app.use(express.static(path.join(__dirname, '../public')));
app.use('/admin', express.static(path.join(__dirname, '../admin')));
app.listen(3000, () => console.log('Servidor rodando na porta 3000'));

app.delete('/api/doacoes', async (req, res) => {
  await Doacao.deleteMany({});
  res.status(204).end();
});

app.delete('/api/voluntarios', async (req, res) => {
  await Voluntario.deleteMany({});
  res.status(204).end();
});

app.delete('/api/palestras', async (req, res) => {
  await Palestra.deleteMany({});
  res.status(204).end();
});
