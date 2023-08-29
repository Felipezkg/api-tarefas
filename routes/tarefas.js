//-------------------------------------------------------------------------------
const express = require('express');
const router = express.Router();
const controller = require('./../controller/tarefas');
//-------------------------------------------------------------------------------
router.get('/', controller.rotaTarefas);
router.get('/:id', controller.rotaTarefasId);
router.post('/', controller.rotaAdicionarTarefa);
router.delete('/:id', controller.rotaDeletarTarefa);
router.put('/marcar-andamento/:id', controller.rotaTarefaAndamento);
router.put('/marcar-concluida/:id', controller.rotaTarefaConcluida);
//-------------------------------------------------------------------------------
module.exports = router;
//-------------------------------------------------------------------------------