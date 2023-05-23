var database = require("../database/config");

function listar(idUsuario) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    SELECT 
    t.idTarefa,
    t.titulo,
    t.dtAtividade,
    t.descricao,
    t.fkUsuario,
    t.fkAtividade,
    a.idAtividade,
    a.nome,
    u.idUsuario 
    FROM tarefa t
	INNER JOIN atividade a 
    ON t.fkAtividade = a.idAtividade
    INNER JOIN Usuario u ON t.fkUsuario = u.idUsuario 
    WHERE idUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

 function pesquisarDescricao(texto) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pesquisarDescricao()");
    var instrucao = `
        SELECT 
            a.id AS idAviso,
            a.titulo,
            a.descricao,
            a.fk_usuario,
            u.id AS idUsuario,
            u.nome,
            u.email,
            u.senha
        FROM aviso a
            INNER JOIN usuario u
                ON a.fk_usuario = u.id
        WHERE a.descricao LIKE '${texto}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
} 

function listarPorUsuario(idUsuario) {
    console.log("ACESSEI O TAREFA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPorUsuario()");
    var instrucao = `
    SELECT 
    t.idTarefa,
    t.titulo,
    DATE_FORMAT(t.dtAtividade,'%Y:%M:%d') as 'dtAtividade',
    t.descricao,
    t.fkUsuario,
    t.fkAtividade,
    a.idAtividade,
    a.nome,
    u.idUsuario 
    FROM tarefa t
	INNER JOIN atividade a 
    ON t.fkAtividade = a.idAtividade
    INNER JOIN Usuario u ON t.fkUsuario = u.idUsuario 
    WHERE idUsuario = ${idUsuario} 
    order by dtAtividade;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function publicar(titulo, data, descricao, idUsuario, atividade) {
    console.log("ACESSEI O TAREFA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", titulo, data, descricao, idUsuario, atividade);
    var instrucao = `
        INSERT INTO tarefa (titulo, dtAtividade, descricao, fkUsuario, fkAtividade) VALUES ('${titulo}', '${data}', '${descricao}', ${idUsuario}, '${atividade}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function editar(novaDescricao, idTarefa) {
    console.log("ACESSEI O TAREFA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", novaDescricao, idTarefa);
    var instrucao = `
        UPDATE tarefa SET descricao = '${novaDescricao}' WHERE idTarefa = ${idTarefa};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function deletar(idTarefa) {
    console.log("ACESSEI O TAREFA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idTarefa);
    var instrucao = `
        DELETE FROM tarefa WHERE idTarefa = ${idTarefa};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}



module.exports = {
    listar,
    listarPorUsuario,
    pesquisarDescricao,
    publicar,
    editar,
    deletar
}
