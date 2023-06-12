var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:porte", function (req, res) {
    medidaController.buscarPortes(req, res);
});


module.exports = router;