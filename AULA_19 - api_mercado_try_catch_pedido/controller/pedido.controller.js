const conn = require("../mysql-connection");

module.exports = {
    cadastro: async (req, res) => {
        const { id_cliente, id_produto } = req.body;

        if (!id_cliente) {
            return res.status(309).send({ msg: "O campo nome é obrigatorio!" });
        }

        if (!id_produto) {
            return res.status(309).send({ msg: "O campo preco é obrigatorio!" });
        }

        if (req.body == id_cliente, id_produto) {
            
            try {
                const total = await conn(produto.preco).sum(preco)
                const pedido = await conn(preco).insert({total});
                
                return res.status(200).send({msg: `Venda adicionada total itens ${pedido} total pedido ${total}`})

            } catch (error) {
                console.log(error)
                return res.status(500).send({msg: "erro ao cadastrar pedido"});
            }

        }


    },

    consulta: async (req, res) => {

        //SELECT pedido.id, pedido.id_cliente, cliente from pedido inner join cliente on cliente.id = produto.cliente 

        try {
            const data = await conn.select().from("pedido");
            res.status(200).send(data);
        } catch (error) {
            return res.status(500).send({ msg: "erro ao consulta produto" });
        }

    },




}



