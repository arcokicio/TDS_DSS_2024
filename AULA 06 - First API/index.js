const express = require("express");

const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// localhost "/"
app.get("/", (request, response) => {
    response.status(200).send("O servidor esta funcionando")
    console.log(response)
    console.log(request)

})

app.get("/novaRota", (request, response) => {
    response.send("essa é a nova rota")
});

app.get("/clientes", (request, response) => {

    const clientes = [
        {
            nome: "Thiago Martins",
            idade: "29"
        },
        {
            nome: "Thiago Martins",
            idade: "29"
        },
                    {
            nome: "Thiago Martins",
            idade: "29"
        }
    ]

    response.send(clientes)

});

app.post("/creante", (request, response) => {
    const creante = request.body;
    response.send(creante); 
})

app.listen(8080, (event) => {
    console.log(" O servidor esta rodando na porta 8080")
});

