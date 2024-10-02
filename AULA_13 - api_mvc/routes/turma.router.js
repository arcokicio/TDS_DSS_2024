// importa biblioteca framework express
const express = require('express');

// instancia router para uma constante
// metodo router para trabalhar com router.get/post/etc
const routes = express.Router();

// requerendo o arquivo controller
const escolaController = require('../controller/escola.controller.js');

// Consulta um cadastro pelo id professor usando filter
routes.get("/consultaid/:idProfessor", escolaController.consultaidProfessor)

// Consulta um cadastro pelo id aluno usando filter
routes.get("/consultaid/:idAluno", escolaController.consultaidAluno)

// da direito de importacao do metodo para outros arquivos
module.exports = routes;    