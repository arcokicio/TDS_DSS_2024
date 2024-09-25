const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(8080, () => {
    console.log("O servidor está rodando na porta 8080");
});

const novoCadastro = [
    {
        id: "1",
        nome: "Thiago1",
        idade: "21",
        email: "thiago1@gmail.com",
        telefone: "4196584-6581"
    },
    {
        id: "2",
        nome: "Thiago2",
        idade: "22",
        email: "thiago2@gmail.com",
        telefone: "4196584-6581"
    },
    {
        id: "3",
        nome: "Thiago3",
        idade: "23",
        email: "thiago3@gmail.com",
        telefone: "4196584-6581"
    }
];

// Adiciona um novo cadastro
app.post("/novoCadastro", (request, response) => {
    const { nome, idade, email, telefone } = request.body;

    if (/[^a-zA-Z\s]/.test(nome)) {
        return response.status(400).send("O nome contém caracteres inválidos");
    }

    if (!nome || !idade || !email || !telefone) {
        return response.status(400).send("Todos os campos são obrigatórios");
    }

    const novoId = (novoCadastro.length + 1).toString();
    novoCadastro.push({ ...request.body, id: novoId });
    response.status(201).send(novoCadastro);
});

// Consulta todos os cadastros
app.get("/consulta", (request, response) => {
    response.send(novoCadastro);
});

// Consulta um cadastro específico
app.get("/consulta/consultanome/:nome", (request, response) => {
    const nomeconsulta = novoCadastro.filter((algumacoisa) => algumacoisa.nome === request.params.nome);
    return response.send(nomeconsulta);
});

// Atualiza um cadastro
app.put("/atualiza/:nome", (request, response) => {
    const { nome, idade, email, telefone } = request.body;
    const atualiza = novoCadastro.filter((algumacoisa) => algumacoisa.nome === request.params.nome);

    if (atualiza === -1 ) {
        return response.status(404).send("Cadastro não encontrado");
    }

    novoCadastro[index] = { ...novoCadastro[index], nome, idade, email, telefone };
    response.send(novoCadastro[index]);
});

// Deleta um cadastro
app.delete("/delete/:nome", (request, response) => {
    const index = novoCadastro.findIndex((algumacoisa) => algumacoisa.nome === request.params.nome);

    if (index === -1) {
        return response.status(404).send("Cadastro não encontrado");
    }

    novoCadastro.splice(index, 1);
    return response.send("Usuário deletado com sucesso");
});
