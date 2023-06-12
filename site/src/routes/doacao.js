const express = require('express');
const router = express.Router();
const upload = require('../config/configUpload'); // ARQUIVO COM A COFIGURAÇÃO DO UPLOAD
const doacaoController = require('../controllers/doacaoController');

router.get("", (req, res) => {
  res.render("doacao")
});

// upload.single('foto') vai buscar no json alguma propriedade chamada foto 
router.post('/cadastro', upload.single('foto'), (req, res) => {
  doacaoController.salvar(req, res);
});

router.get('/listar', upload.single('foto'), (req, res) => {
  doacaoController.buscarCachorros(req, res);
});

module.exports = router;

