var database = require("../database/config");

function listarQtdTarefas(idUsuario){
    var instrucao = `
    SELECT COUNT(idTarefa) AS qtdTarefa FROM tarefa
	INNER JOIN Usuario ON fkUsuario = idUsuario
	WHERE idUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function grafico(idUsuario) {
    var instrucao = `
    SELECT COUNT(tarefa.fkAtividade) as qtdTarefa, atividade.nome AS atividade
    FROM tarefa 
    JOIN atividade ON  atividade.idAtividade = tarefa.fkAtividade 
    where fkUsuario = ${idUsuario} group by tarefa.fkAtividade 
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    listarQtdTarefas,
    grafico
}