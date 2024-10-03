// importa biblioteca framework express
const express = require('express');

// instancia router para uma constante
const routes = express.Router();

// requerendo o arquivo controller
const escolaController = require('../controller/escola.controller.js');

// cadastra aluno
routes.post("/cadastraAluno", escolaController.cadastraAluno);

// Deleta um cadastro pelo nome
routes.delete("/deletealuno/:nome", escolaController.deletar);

// Endpoint para consultar um cadastro específico pelo nome
routes.get("/consulta/:nome", escolaController.consultaNome);

// da direito de importação do método para outros arquivos
module.exports = routes;
