//ARQUIVO RESPONSAVEL POR IMPORTAR TODAS AS ROTAS PRINCIPAIS

// importa biblioteca express
const express = require('express');

// requires
const clienteRouter = require('./cliente.router')
const notaRouter = require('./nota.router')

// instancia router para uma constante
const routes = express.Router();

routes.use("/clientes", clienteRouter)
routes.use("/nota", notaRouter)



// exporta modelo
module.exports = routes;

