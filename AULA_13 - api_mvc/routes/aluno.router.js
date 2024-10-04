// importa biblioteca framework express
const express = require('express');

// instancia router para uma constante
const routes = express.Router();

// requerendo o arquivo controller
const alunoController = require('../controller/aluno.controller.js');

// atualiza cadastro do aluno
routes.post("/", alunoController.atualizaAluno)

// consulta cadastro através do ID do aluno
routes.get("/", alunoController.consultaidAluno)

// cadastra aluno
routes.post("/", alunoController.cadastraAluno);

// Deleta um cadastro pelo nome
routes.delete("/:id", alunoController.deletar);

// Endpoint para consultar um cadastro específico pelo nome
routes.get("/:nome", alunoController.consultaNome);

// da direito de importação do método para outros arquivos
module.exports = routes;
