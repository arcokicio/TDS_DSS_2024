const conn = require("../mysql-connection");


module.exports = ({
    cadastrar: (req, res)=>{},
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