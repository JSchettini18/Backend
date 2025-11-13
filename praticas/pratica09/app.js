const express = require('express');
const path = require('path');
const apidocsRouter = require('./routes/apidocsRouter');

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/api-docs', apidocsRouter);


app.use(function (req, res, next) {
  res.status(404).json({ message: 'Rota não encontrada' });
});


app.use(function (err, req, res, next) {
  console.error(err);
  res.status(err.status || 500).json({
    message: err.message || 'Erro interno no servidor'
  });
});

module.exports = app;
