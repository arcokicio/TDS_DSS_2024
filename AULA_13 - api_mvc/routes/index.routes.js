// ARQUIVO RESPONSÁVEL POR IMPORTAR TODAS AS ROTAS PRINCIPAIS

// importa biblioteca express
const express = require('express');

// requires
const alunoRouter = require('./aluno.router');
const professorRouter = require('./professor.router');
const turmaRouter = require('./turma.router');  

// instancia router para uma constante
const routes = express.Router();

// Define rotas específicas para cada tipo
routes.use("/aluno", alunoRouter); // /escola/alunos
routes.use("/professor", professorRouter); // /escola/professores
routes.use("/turma", turmaRouter); // /escola/turmas

// exporta modelo
module.exports = routes;
