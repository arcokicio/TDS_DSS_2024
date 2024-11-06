const routes = require ("express").Router();
const perguntasController = require ("../controller/perguntas.controller")

// CRUD
routes.post("/", perguntasController.cadastrar)
routes.get("/", perguntasController.consultar)


module.exports = routes;