const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB conectado')).catch(err => console.error(err));

const Doacao = require('./models/Doacao');
const Voluntario = require('./models/Voluntario');
const Palestra = require('./models/Palestra');
const Admin = require('./models/Admin');

// POST - Cadastro
app.post('/api/doacoes', async (req, res) => {
  const nova = new Doacao(req.body);
  const salvo = await nova.save();
  res.status(201).json(salvo);
});

app.post('/api/voluntarios', async (req, res) => {
  const novo = new Voluntario(req.body);
  const salvo = await novo.save();
  res.status(201).json(salvo);
});

app.post('/api/palestras', async (req, res) => {
  const nova = new Palestra(req.body);
  const salvo = await nova.save();
  res.status(201).json(salvo);
});

app.post('/api/login', async (req, res) => {
  const { usuario, senha } = req.body;
  const admin = await Admin.findOne({ usuario });
  if (!admin || admin.senha !== senha) return res.status(401).json({ erro: 'Acesso negado' });
  res.status(200).json({ mensagem: 'Login bem-sucedido' });
});

// GET - Listagem
app.get('/api/doacoes', async (req, res) => {
  const dados = await Doacao.find().sort({ data: -1 });
  res.json(dados);
});

app.get('/api/voluntarios', async (req, res) => {
  const dados = await Voluntario.find().sort({ nome: 1 });
  res.json(dados);
});

app.get('/api/palestras', async (req, res) => {
  const dados = await Palestra.find().sort({ data: 1 });
  res.json(dados);
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));