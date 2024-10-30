const routes = require("express").Router();
const produtoController = require("../controller/produto.controller");

//CRUD
routes.post("/", produtoController.cadastro);
routes.get("/", produtoController.consultar);
routes.put("/)", produtoController.atualizar);
routes.delete("/", produtoController.deletar);

module.exports = routes;