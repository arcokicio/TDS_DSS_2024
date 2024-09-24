// funcao push so funciona para array list
const { response } = require("express");

//desintegração do body (a constante faz um cruzamento de dados e percebe que está vazio ou undefenied)
const {id, nome,email ,senha} = request.body;
// negando campo para dizer que não está preenchido !id
if(!id){
    response.status(400).send("é obrigatório ID");
}

// negando campo para dizer que não está preenchido !id outro modo
if(request.body.id){
    response.status(400).send("obrigatorio enviar campo ID")
}
else if (request.body.nome) {
    response.status(400).send("obrigatorio enviar campo NOME")
}
else if (request.body.email) {
    response.status(400).send("obrigatorio enviar campo EMAIL")
}
else if (request.body.senha) {
    response.status(400).send("obrigatorio enviar campo SENHA")
}

// alternativa de verificação para for, usar o filter
novoCadastro.filter((item)=> {
    if(item.nome == nome){
        return response.status(404).send('o codigo $(id) ja esta em uso')
    }
});

app.delete("/novoCadastro/:nome", (request, response) => {
    return response.send(request.params.nome);
 })


//opcional criar uma classe com as informações da body
class cliente{
    nome
    email
    telefone
}


