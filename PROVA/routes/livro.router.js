const express = require("express")
const routes = require("express").Router();
const livroController = require("../controller/livro.controller");

// CRUD
routes.post("/", livroController.cadastro);
routes.get("/", livroController.consultar);
routes.put("/", livroController.atualizar);
routes.delete("/", livroController.deletar);

module.exports = routes;