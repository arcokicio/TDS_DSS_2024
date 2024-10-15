// importando biblioteca express e instanciando router
const routes = require("express").Router();

//importando cliente controller
const produtoController = require("../controller/produto.controller");

//CRUD
routes.post("/", produtoController.cadastrar);
routes.get("/", produtoController.consultar);
routes.put("/:id([0-9])", produtoController.atualizar);
routes.delete("/", produtoController.deletar);

// exporta modelo
module.exports = routes;