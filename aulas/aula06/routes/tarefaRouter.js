const express = require('express');
const controller = require('../controllers/tarefaController');
const router = express.Router();

router.get("/", controller.listarTarefas);

router.post("/", controller.criarTarefa);

router.get("/:id", controller.pesquisarId, controller.exibirTarefa);

router.put("/:id", controller.alterarTarefa, controller.alterarTarefa);

router.delete("/:id",controller.apagarTarefa, controller.apagarTarefa);

module.exports = router;
