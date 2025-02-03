const express = require("express")
const routes = require("express").Router();
const autorController = require("../controller/autor.controller");

//CRUD
routes.post("/", autorController.cadastrar);
routes.get("/", autorController.consultar);
routes.put("/", autorController.atualizar);
routes.delete("/", autorController.deletar);

module.exports = routes;