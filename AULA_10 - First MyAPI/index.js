// npm install (baixa todos as dependencias se vc ja tem um arquivo configurado)
// npm init -y (inicia projeto e o cria todas propriedades)
// npm i express (instala pacotes https)
// npm install body-parser (Serealizacação, conversão object para json)
// npm i -d nodeman (cria com dependencias de desenvolvimento ou seja não vai ser executada quando buildar)
// npm start
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
var novoCadastro = [
    {
        nome: "Thiago1",
        idade: "21",
        email: "thiago1@gmail.com",
        telefone: "4196584-6581",
        id:"323242"
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

    // variavel nomeProcurado recebe o body da novoCadastro
    let nomeProcurado = request.body.nome;
    //desintegração do body (a constante faz um cruzamento de dados e percebe que está vazio ou undefenied)
    const {nome, idade ,email, telefone} = request.body;


    
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
//.leght retorna tamanho da lista
    for (var i = 0; i < novoCadastro.length; i++) {
        //[i] pegando a posição da lista obrigatorio pq se trata de um array
        if (novoCadastro[i].nome === nomeProcurado) {
            response.send("Ja existe o nome na lista")
        }
    }

    // negando campo para dizer que não está preenchido !id outro modo negando o request verdadeiro

    if (!nome) {
        return response.status(400).send("obrigatorio enviar campo NOME")
    }
    else if (!idade) {
       return response.status(400).send("obrigatorio enviar campo IDADE")
    }
    else if (!email) {
       return response.status(400).send("obrigatorio enviar campo SENHA")
    }
    else if (!telefone) {
        return response.status(400).send("obrigatorio enviar campo SENHA")
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

// : para o GET acessar e enviar uma propriedade
app.get("/consulta/:nome", (request, response) => {
   return response.status(400).send(request.params.nome);
})

// Atualiza cadastro buscando o ja existente pelo id
app.put("/atualiza/:id", (request, response) => {
    const { nome, idade, email, telefone } = request.body;

    //O método findIndex() retorna o índice no array do primeiro elemento que satisfizer 
    // a função de teste provida. Caso contrário, retorna -1, indicando que nenhum elemento passou no teste.
   
    const index = novoCadastro.findIndex((algumacoisa) => algumacoisa.id === request.params.id);

 

    // Atualiza o cadastro com os novos dados
    novoCadastro[index] = { ...novoCadastro[index], nome, idade, email, telefone };
    response.send(novoCadastro[index]);
});

app.get("/consulta/consultanome/:nome", (request, response) => {
// alternativa de verificação para for, usar o filter
// filter cria um novo array com todos os elementos que passam por uma função que neste caso é a função algumacoisa
// algumacoisa.nome: Acessa a propriedade nome do objeto.
// request.params.nome: Acessa o parâmetro nome que foi enviado na requisição (por exemplo, em uma URL).
const nomeconsulta = novoCadastro.filter((algumacoisa)=> algumacoisa.nome == request.params.nome);  
 return response.send(nomeconsulta) 
})

app.delete("/delete/:nome", (request, response) => {
    const nomeconsulta = novoCadastro.filter((algumacoisa)=> algumacoisa.nome == request.params.nome);  
    // splice recebe 2 parametros index e quantidade de elementos para remover
    var removed = novoCadastro.splice(nomeconsulta, 1);
    
    return response.send("usuario deletado")
})

