const routes = require ("express").Router();
const respostasController = require ("../controller/respostas.controller")

// CRUD
routes.post("/", respostasController.post)
routes.push("/",respostasController.push)

module.exports = routes;