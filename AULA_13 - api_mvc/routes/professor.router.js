// importa biblioteca framework express
const express = require('express');

// instancia router para uma constante
// metodo router para trabalhar com router.get/post/etc
const routes = express.Router();

// requerendo o arquivo controller
const escolaController = require('../controller/escola.controller.js');

// cadastra professor
routes.post("/cadastraProfessor", escolaController.professor);

// Deleta um cadastro pelo nome
routes.delete("/deleteprofessor/:id", escolaController.deletar)

// da direito de importacao do metodo para outros arquivos
module.exports = routes;    