// npm init -y (cria todas propriedades)
// npm i express
// npm install body-parser
// npm i -d nodeman (cria com dependencias de desenvolvimento ou seja não vai ser executada quando buildar)
// json nome e propriedade em aspas

const express = require("express"); // importa express
const app = express(); // estanceia express
const bodyParser = require("body-parser"); // importa express

app.use(bodyParser.json()); // usa json
app.use(bodyParser.urlencoded({ extended: false })); //executar o unlercoded

// arrow function  para listar na porta 8080
app.listen(8080, (event) => {
    console.log(" O servidor esta rodando na porta 8080")
});

// localhost "/"
/* app.get("/", (request, response) => {
    response.status(200).send("O servidor esta funcionando")
    console.log(response)
    console.log(request)

})
*/
const novoCadastro = [
    {
        nome: "Thiago1",
        idade: "21",
        email: "thiago1@gmail.com",
        telefone: "4196584-6581"
    },
    {
        nome: "Thiago2",
        idade: "22",
        email: "thiago1@gmail.com",
        telefone: "4196584-6581"
    },
    {
        nome: "Thiago3",
        idade: "23",
        email: "thiago1@gmail.com",
        telefone: "4196584-6581"
    }
]

//padrão request response
app.post("/novoCadastro", (request, response) => {

    // por padrão criar uma resposta
      novoCadastro.push(request.body)
      response.send(novoCadastro)

});

app.get("/consulta", (request, response) => {
    response.send(novoCadastro)
})





