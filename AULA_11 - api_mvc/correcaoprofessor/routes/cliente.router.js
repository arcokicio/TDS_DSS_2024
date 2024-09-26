const express = require('express');

const routes = express.Router();

const clientes = [];

routes.post("/cadastro", (req, res) => {
    const { id, nome, email, senha } = req.body;

    console.log(req.body);
    clientes.push({
        id, nome, email, senha
    })

    res.send(req.body);
})

module.exports = routes;