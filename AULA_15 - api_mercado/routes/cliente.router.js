// importando biblioteca express e instanciando router
const routes = require("express").Router();

//importando cliente controller
const clienteController = require("../controller/cliente.controller")

//CRUD
routes.post("/", clienteController.cadastrar);
routes.get("/", clienteController.consultar);
routes.put("/:id([0-9])", clienteController.atualizar);
routes.delete("/", clienteController.deletar);

// exporta modelo
module.exports = routes;