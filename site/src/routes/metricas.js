var express = require("express");
var router = express.Router();

var metricasController = require("../controllers/metricasController");

router.get("/listarQtdTarefas/:idUsuario", function (req, res) {
    metricasController.listarQtdTarefas(req, res);
});

router.get("/fazerRanking/:idUsuario", function (req, res) {
    metricasController.fazerRanking(req, res);
});
router.get("/grafico/:id", function (req, res) {
    metricasController.graficoAtividade(req, res);
})


module.exports = router;