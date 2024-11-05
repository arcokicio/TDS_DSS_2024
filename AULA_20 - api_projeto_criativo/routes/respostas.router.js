const routes = require ("express").Router();
const respostasController = require ("../controller/respostas.controller")

// CRUD
routes.post("/", respostasController.cadastrar)
routes.get("/", respostasController.consultar)
routes.put("/", respostasController.atualizar)
routes.delete ("/", respostasController.deletar)

module.exports = routes;