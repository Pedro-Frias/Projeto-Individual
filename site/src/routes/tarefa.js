var express = require("express");
var router = express.Router();

var tarefaController = require("../controllers/tarefaController");

router.get("/", function (req, res) {
    tarefaController.testar(req, res);
});

router.get("/listar", function (req, res) {
    tarefaController.listar(req, res);
});

router.get("/listar/:idUsuario", function (req, res) {
    tarefaController.listarPorUsuario(req, res);
});

router.get("/pesquisar/:descricao", function (req, res) {
    tarefaController.pesquisarDescricao(req, res);
});

router.post("/publicar/:idUsuario", function (req, res) {
    tarefaController.publicar(req, res);
});

router.put("/editar/:idTarefa", function (req, res) {
    tarefaController.editar(req, res);
});

router.delete("/deletar/:idTarefa", function (req, res) {
    tarefaController.deletar(req, res);
});

module.exports = router;