const routes = require ("express").Router();
const perguntasController = require ("../controller/perguntas.controller")

// CRUD
routes.post("/", perguntasController.cadastrar)
routes.get("/", perguntasController.consultar)
routes.put("/", perguntasController.atualizar)
routes.delete ("/", perguntasController.deletar)

module.exports = routes;