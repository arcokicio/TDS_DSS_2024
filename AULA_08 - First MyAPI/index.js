// npm install (baixa todos as dependencias se vc ja tem um arquivo configurado)
// npm init -y (inicia projeto e o cria todas propriedades)
// npm i express (instala pacotes https)
// npm install body-parser (Serealizacação, conversão object para json)
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

    let nomeProcurado = request.body.nome;

        //-------Expressões Regulares--------
    // / ... /: Delimita a expressão regular.
    // \d: Este é um metacaractere que representa qualquer dígito de 0 a 9.
    // .test(...): O método test() é usado para verificar se a expressão regular 
    // corresponde a alguma parte da string que está sendo testada. Retorna true se 
    // encontrar uma correspondência e false caso contrário.
    // Verifica se o nome contém números
    // [ e ]: Esses colchetes delimitam uma classe de caracteres
    // ^ (Caret):Quando colocado no início da classe de caracteres, o símbolo ^ 
    // indica que estamos buscando caracteres que não estão incluídos na lista que segue. Ou seja, ele nega a correspondência.
    // a-z - quando nao conter letras minuscula de a-z
    // A-Z - quando nao conter letras maiuscula de A-Z
    // \s atalho para whitespace - quando nao conter espaço 

    if (/[^a-zA-Z\s]/.test(nomeProcurado)) {
        return response.status(400).send("O nome contém caracteres inválidos");
    }

    for (var i = 0; i < novoCadastro.length; i++) {
        if (novoCadastro[i].nome === nomeProcurado) {
            response.send("Ja existe o nome na lista")
        }
    }

    const novoId = Math.floor(100000 + Math.random() * 900000).toString();

    // Adiciona o novo cadastro com o ID gerado
    // novoCadastro.push({
    //    id: novoId,
    //    });

    // por padrão criar uma resposta
    // push ou put para empurrar a body do novo cadastro configurado no insonmia não esquecer de selecionar json no insonmia
    novoCadastro.push({ ...request.body, id: novoId })
    response.send(novoCadastro);

});









app.get("/consulta", (request, response) => {
    response.send(novoCadastro)
})





