const doacaoModel = require('../models/doacaoModel');


function salvar(req, res) {
  const imagem = req.file.filename;

  const {nomeCachorro,racaCachorro,nomeDono,contato } = req.body

  const usuario = { nomeCachorro, racaCachorro, nomeDono,contato, imagem }
  
  doacaoModel.salvar(usuario)
  .then(resultado => {
    res.status(201).send("Usuario criado com sucesso");
  }).catch(err => {
    res.status(500).send(err);
  });
}

function buscarCachorros(req, res) {
  console.log(req.params.id);
  doacaoModel.buscarCachorros()
/*   doacaoModel.quantidadeTotal() */
  .then(resultado => {
    res.json(resultado);
  }).catch(err => {
    res.status(500).send(err);
  });
}

module.exports = { salvar, buscarCachorros }