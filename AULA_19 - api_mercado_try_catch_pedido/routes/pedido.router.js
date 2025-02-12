const routes = require("express").Router();
const pedidoController = require("../controller/pedido.controller");

//CRUD
routes.post("/", pedidoController.cadastro);
routes.get("/"), pedidoController.consulta);
routes.put("/)", pedidoController.atualizar);
routes.delete("/", pedidoController.deletar);

module.exports = routes;
