// funcao push so funciona para array list

const { response } = require("express");

//desintegração do body
const {id, nome,email ,senha} = request.body;
// negando campo para dizer que não está preenchido !id
if(!id){
    response.status(400).send("é obrigatório ID");
}

//opcional criar uma classe com as informações
class cliente{
    nome
    email
    telefone
}


