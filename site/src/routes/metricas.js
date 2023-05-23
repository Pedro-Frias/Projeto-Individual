var express = require("express");
var router = express.Router();

var metricasController = require("../controllers/metricasController");

router.get("/listarQtdTarefas/:idUsuario", function (req, res) {
    metricasController.listarQtdTarefas(req, res);
});

router.get("/grafico/:id", function (req, res) {
    metricasController.grafico(req, res);
})


module.exports = router;