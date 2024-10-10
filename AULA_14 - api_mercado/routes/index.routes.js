// importa biblioteca express
const express = require('express');

// instancia router para uma constante
const routes = express.Router();
// exporta modelo
module.exports = routes;

//requires
const produtoRouter = require('./produto.router')
const clienteRouter = require('./cliente.router')
const pedidoRouter = require('./pedido.router')

routes.use("/produto",produtoRouter)
routes.use("/cliente",clienteRouter)
routes.use("/pedido",pedidoRouter)