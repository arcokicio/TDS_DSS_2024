// importa biblioteca framework express
const express = require('express');

// instancia router para uma constante
const routes = express.Router();

// requerendo o arquivo controller
const escolaController = require('../controller/escola.controller.js');

// cadastra professor
routes.post("/cadastraProfessor", escolaController.cadastraProfessor); // METODO cadastroProfessor

// Deleta um cadastro pelo nome
routes.delete("/deleteprofessor/:nome", escolaController.deletar); // MEOTODO deletar

// exporta o modelo para uso em outros arquivos
module.exports = routes;
