var database = require("../database/config");

function buscarUltimasMedidas() {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT COUNT(Usuario.fkPorte) as voto, porteCachorro.porte AS porte 
        FROM Usuario JOIN porteCachorro ON  porteCachorro.idPorte = usuario.fkPorte group by Usuario.fkPorte ;`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT COUNT(Usuario.fkPorte) as voto, porteCachorro.porte AS porte 
        FROM Usuario JOIN porteCachorro ON  porteCachorro.idPorte = usuario.fkPorte group by Usuario.fkPorte ;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
}
