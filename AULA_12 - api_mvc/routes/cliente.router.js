// importa biblioteca framework express
const express = require('express');

// instancia router para uma constante
// metodo router para trabalhar com router.get/post/etc
const routes = express.Router();

// requerendo o arquivo controller
const consultaController = require('../controller/cliente.controller.js')

//consulta
routes.get("/consulta", consultaController.consulta);

// Padrão request-response para criar um novo cadastro
routes.post("/novoCadastro", consultaController.cadastro);

// Endpoint para consultar um cadastro específico pelo nome
//routes.get("/consulta/:nome", (request, response) => {
//    return response.status(400).send(request.params.nome); // Retorna o nome da consulta
//    
//});

// Atualiza um cadastro existente pelo ID
routes.put("/atualiza/:id", consultaController.atualiza);

// Consulta um cadastro pelo nome usando filter
routes.get("/consultanome/:nome", consultaController.consultaNome)

// Deleta um cadastro pelo nome
routes.delete("/delete/:nome", consultaController.deletar)

// da direito de importacao do metodo para outros arquivos
module.exports = routes;    