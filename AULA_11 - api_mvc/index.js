// npm install (baixa todas as dependências se você já tem um arquivo configurado)
// npm init -y (inicia projeto e cria todas as propriedades)
// npm i express (instala pacotes http)
// npm install body-parser (serialização, conversão de objeto para JSON)
// npm i -d nodemon (cria dependências de desenvolvimento que não serão executadas quando buildar)
// npm start (inicia o servidor)
// json nome e propriedade em aspas

const express = require('express'); // importa express 
const bodyParser = require('body-parser'); // importa bodyparser
const indexRoutes = require('./routes/index.routes') // clienteRouter

const app = express(); // instancia express

app.use(bodyParser.json()); // usa JSON para parsing - aceitar corpo json

app.use(indexRoutes)

// Array de novos cadastros
var novoCadastro = [
    {
        nome: "Thiago1",
        idade: "21",
        email: "thiago1@gmail.com",
        telefone: "4196584-6581",
        id: "323242"
    },
    {
        nome: "Thiago2",
        idade: "22",
        email: "thiago2@gmail.com",
        telefone: "4196584-6581"
    },
    {
        nome: "Thiago3",
        idade: "23",
        email: "thiago3@gmail.com",
        telefone: "4196584-6581"
    }
];

// Padrão request-response para criar um novo cadastro
app.post("/novoCadastro", (request, response) => {
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
app.get("/consulta/:nome", (request, response) => {
    return response.status(400).send(request.params.nome); // Retorna o nome da consulta
});

// Atualiza um cadastro existente pelo ID
app.put("/atualiza/:id", (request, response) => {
    const { nome, idade, email, telefone } = request.body;

    // Encontra o índice do cadastro pelo ID
    const index = novoCadastro.findIndex((algumacoisa) => algumacoisa.id === request.params.id);

    // Atualiza o cadastro com os novos dados
    novoCadastro[index] = { ...novoCadastro[index], nome, idade, email, telefone };
    response.send(novoCadastro[index]); // Retorna o cadastro atualizado
});

// Consulta um cadastro pelo nome usando filter
app.get("/consulta/consultanome/:nome", (request, response) => {
    const nomeconsulta = novoCadastro.filter((algumacoisa) => algumacoisa.nome == request.params.nome);
    return response.send(nomeconsulta); // Retorna o cadastro correspondente
});

// Deleta um cadastro pelo nome
app.delete("/delete/:nome", (request, response) => {
    const nomeconsulta = novoCadastro.filter((algumacoisa) => algumacoisa.nome == request.params.nome);
    // splice remove o item do array
    var removed = novoCadastro.splice(novoCadastro.indexOf(nomeconsulta[0]), 1);
    
    return response.send("Usuário deletado"); // Retorna mensagem de sucesso
});



// Função de escuta na porta 8080
app.listen(8080, () => {
    console.log("O servidor está rodando na porta 8080");
});