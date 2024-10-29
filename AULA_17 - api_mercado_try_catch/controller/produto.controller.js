const conn = require("../mysql-connection");

module.exports = {
    cadastro : (req,res) => {},
    consultar: async (req,res)=>{
       
        try{
            const data = await conn.raw("SELECT * FROM PRODUTO");
        }catch(error){
            console.log(error);
            return res.status(500).send({msg: "erro ao consultar produtos"});
                }
       
        console.log(data);
        res.send(data[0]);

    },
    
    atualizar: async (req, res)=>{
        const {nome, preco} = req.body;
        try{
            const data = await conn.raw(`UPDATE CLIENTE SET preco='${preco}',
            WHERE id =  ${nome}`)
            console.log(data);
            res.status(200).send({ msg: "Preco atualizado com sucesso!" })
        }catch{
            console.log(error);
            res.status(500).send({ msg: "Erro ao atualizar o preço!" });          

        }},

    deletar: async (req, res)=>{
        const {nome} = req.params;
        conn.raw(`DELETE FROM CLIENTE WHERE ID = ${nome}`)  
        try{
            const data = await conn.raw()
        }   
        
        
    }
}
