// importa biblioteca framework express
const express = require('express');

// instancia router para uma constante
// metodo router para trabalhar com router.get/post/etc
const routes = express.Router();

// requerendo o arquivo controller
const escolaController = require('../controller/escola.controller.js');

//cadastra aluno*
routes.post("/cadastraAluno", escolaController.aluno);

// Deleta um cadastro pelo nome
routes.delete("/deletealuno/:id", escolaController.deletar)

// Endpoint para consultar um cadastro específico pelo nome
//routes.get("/consulta/:nome", (request, response) => {
//    return response.status(400).send(request.params.nome); // Retorna o nome da consulta
//    
//});

// da direito de importacao do metodo para outros arquivos
module.exports = routes;    