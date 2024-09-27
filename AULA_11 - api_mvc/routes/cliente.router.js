// importa biblioteca framework express
const express = require('express');

// instancia router para uma constante
const routes = express.Router();

var novoCadastro = [{
    nome: "Thiago1",
        idade: "21",
        email: "thiago1@gmail.com",
        telefone: "4196584-6581",
        id: "323242"
}];

//consulta
routes.get("/consulta", (request, response) => {
    response.send(novoCadastro); // Retorna a lista de cadastros
});


// Padrão request-response para criar um novo cadastro
routes.post("/novoCadastro", (request, response) => {
    let nomeProcurado = request.body.nome; // variável que recebe o nome do body
    const { nome, idade, email, telefone } = request.body; // desestruturação do body

    // Verifica se o nome contém caracteres inválidos usando expressões regulares
    if (/[^a-zA-Z\s]/.test(nomeProcurado)) {
        return response.status(400).send("O nome contém caracteres inválidos");
    }

    // Verifica se já existe um cadastro com o mesmo nome
    for (var i = 0; i < novoCadastro.length; i++) {
        if (novoCadastro[i].nome === nomeProcurado) {
            return response.send("Já existe o nome na lista");
        }
    }

    // Verifica se os campos obrigatórios foram preenchidos
    if (!nome) {
        return response.status(400).send("É obrigatório enviar o campo NOME");
    } else if (!idade) {
        return response.status(400).send("É obrigatório enviar o campo IDADE");
    } else if (!email) {
        return response.status(400).send("É obrigatório enviar o campo EMAIL");
    } else if (!telefone) {
        return response.status(400).send("É obrigatório enviar o campo TELEFONE");
    }

    // Gera um novo ID aleatório
    const novoId = Math.floor(100000 + Math.random() * 900000).toString();

    // Adiciona o novo cadastro com o ID gerado
    novoCadastro.push({ ...request.body, id: novoId });
    response.send(novoCadastro); // Retorna a lista atualizada
});


// Endpoint para consultar um cadastro específico pelo nome
//routes.get("/consulta/:nome", (request, response) => {
//    return response.status(400).send(request.params.nome); // Retorna o nome da consulta
//    
//});

// Atualiza um cadastro existente pelo ID
routes.put("/atualiza/:id", (request, response) => {
    const { nome, idade, email, telefone } = request.body;

    // Encontra o índice do cadastro pelo ID
    const index = novoCadastro.findIndex((algumacoisa) => algumacoisa.id === request.params.id);

    // Atualiza o cadastro com os novos dados
    novoCadastro[index] = { ...novoCadastro[index], nome, idade, email, telefone };
    response.send(novoCadastro[index]); // Retorna o cadastro atualizado
});

// Consulta um cadastro pelo nome usando filter
routes.get("/consultanome/:nome", (request, response) => {
    const nomeconsulta = novoCadastro.filter((algumacoisa) => algumacoisa.nome == request.params.nome);
    return response.send(nomeconsulta); // Retorna o cadastro correspondente
});

// Deleta um cadastro pelo nome
routes.delete("/delete/:nome", (request, response) => {
    const nomeconsulta = novoCadastro.filter((algumacoisa) => algumacoisa.nome == request.params.nome);
    // splice remove o item do array
    var removed = novoCadastro.splice(novoCadastro.indexOf(nomeconsulta[0]), 1);
    
    return response.send("Usuário deletado"); // Retorna mensagem de sucesso
});

// da direito de importacao do metodo para outros arquivos
module.exports = routes;    