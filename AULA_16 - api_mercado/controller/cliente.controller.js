const { response } = require("express");
const conn = require("../mysql-connection");


module.exports = ({
    cadastrar: (req, res)=>{
        const {nome, telefone} = req.body;

        var comando = '';

        if(!telefone){
            comando = `INSERT INTO CLIENTE(nome,telefone) VALUES ('${nome}', null)`
        } else {
            comando = `INSERT INTO CLIENTE(nome,telefone) VALUES ('${nome}','${telefone}')`
        }
        
        conn.raw(comando)
        .then((data) =>{
            res.status(200).send({msg: 'cadastro efetuado com sucesso'});
        })
        .catch((error) =>{
            res.status(500).send("erro ao cadastrar");
        });
        
    },

    consultar: (req, res)=>{
        conn.raw("SELECT * FROM CLIENTE"). then((data) =>{
            res.send(data[0])
        }).catch((erro)=>{
            res.send("erro ao consultar os clientes")
        })
    },
    atualizar: (req,res)=>{},
    deletar: (req,res)=>{}
});