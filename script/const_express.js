const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');

// Conecte-se ao MongoDB
mongoose.connect('mongodb://localhost:27017/minhaLoja', { useNewUrlParser: true, useUnifiedTopology: true });

// Defina o esquema do produto
const produtoSchema = new mongoose.Schema({
  nome: String,
  preco: Number,
  quantidade: Number
});

// Crie o modelo do produto
const Produto = mongoose.model('Produto', produtoSchema);

// Crie o aplicativo Express
const app = express();

// Use o middleware JSON do Express
app.use(express.json());

// Defina EJS como mecanismo de visualização
app.set('view engine', 'ejs');

// Rota para obter todos os produtos
app.get('/produtos', async (req, res) => {
  const produtos = await Produto.find();
  res.render('produtos', { produtos: produtos });
});

// Rota para criar um novo produto
app.post('/produtos', async (req, res) => {
  const novoProduto = new Produto(req.body);
  const resultado = await novoProduto.save();
  res.redirect('/produtos');
});

// Rota para atualizar um produto existente
app.put('/produtos/:id', async (req, res) => {
  const produto = await Produto.findById(req.params.id);
  produto.nome = req.body.nome;
  produto.preco = req.body.preco;
  produto.quantidade = req.body.quantidade;
  const resultado = await produto.save();
  res.redirect('/produtos');
});

// Inicie o servidor
app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
