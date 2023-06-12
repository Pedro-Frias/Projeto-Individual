var metricasModel = require("../models/metricasModel");

function listarQtdTarefas(req, res){
    var idUsuario = req.params.idUsuario;

    metricasModel.listarQtdTarefas(idUsuario)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!");
            }
        })
        .catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar a quantidade de tarefas: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function fazerRanking(req, res) {

    var idUsuario = req.params.idUsuario;

    metricasModel.fazerRanking(idUsuario)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                    
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "Houve um erro ao buscar os a quantidade de votos: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function graficoAtividade(req, res) {
    var idUsuario = req.params.id;

    metricasModel.graficoAtividade(idUsuario)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                    console.log('O ID USER É '+idUsuario)
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "Houve um erro ao buscar os a quantidade de diários: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}



module.exports = {
    listarQtdTarefas,
    fazerRanking,
    graficoAtividade
}