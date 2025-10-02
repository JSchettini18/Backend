const tarefaModel = require('../models/tarefaModel');


function listar(req, res) {
  const resultado = tarefaModel.listar();
  res.json(resultado);
}


function buscarPeloId(req, res) {
  const { tarefaId } = req.params;
  const resultado = tarefaModel.buscarPeloId(tarefaId);

  if (resultado) {
    res.json(resultado);
  } else {
    res.status(404).json({ msg: 'Tarefa não encontrada' });
  }
}


function criar(req, res) {
  const novaTarefa = tarefaModel.criar(req.body);
  res.status(201).json(novaTarefa);
}


function atualizar(req, res) {
  const { tarefaId } = req.params;
  const tarefaAtualizada = tarefaModel.atualizar({ id: tarefaId, ...req.body });

  if (tarefaAtualizada) {
    res.json(tarefaAtualizada);
  } else {
    res.status(404).json({ msg: 'Tarefa não encontrada' });
  }
}


function remover(req, res) {
  const { tarefaId } = req.params;
  const tarefaRemovida = tarefaModel.remover(tarefaId);

  if (tarefaRemovida) {
    res.status(204).send();
  } else {
    res.status(404).json({ msg: 'Tarefa não encontrada' });
  }
}

module.exports = { listar, buscarPeloId, criar, atualizar, remover };
