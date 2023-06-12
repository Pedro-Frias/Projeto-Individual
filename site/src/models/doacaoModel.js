const database = require("../database/config");

function salvar(usuario) {
  const instrucao = `insert into doacao (nomeCachorro, racaCachorro,nomeDono,contato, imagem) values ('${usuario.nomeCachorro}', '${usuario.racaCachorro}','${usuario.nomeDono}','${usuario.contato}', '${usuario.imagem}') `;

  return database.executar(instrucao);
}

function buscarCachorros() {
  const instrucao = `select * from doacao;`;

  return database.executar(instrucao);
}
module.exports = { salvar, buscarCachorros /* , quantidadeTotal */ }