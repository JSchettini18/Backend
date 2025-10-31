// app.js
require('dotenv').config();

const express = require('express');
const logger = require('morgan');

const usuariosRouter = require('./routes/usuariosRouter');
const produtosRouter = require('./routes/produtosRouter');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// rotas
app.use('/usuarios', usuariosRouter);
app.use('/produtos', produtosRouter);

// exporta app p/ testes
module.exports = app;
