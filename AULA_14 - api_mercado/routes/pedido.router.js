// importando biblioteca express e instanciando router
const routes = require("express").Router();

//importando cliente controller
const pedidoController = require("../controller/pedido.controller");

//CRUD
routes.post("/", ()=>pedidoController.cadastrar);
routes.get("/", ()=>pedidoController.consultar);
routes.put("/:id([0-9])", ()=>pedidoController.atualizar);
routes.delete("/", ()=>pedidoController.deletar);

// exporta modelo
module.exports = routes;