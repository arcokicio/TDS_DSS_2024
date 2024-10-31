const conn = require("../mysql-connection");

module.exports = {
    cadastro: async (req, res) => {
        const { id_cliente, id_produto } = req.body;

        // Validação dos campos obrigatórios
        if (!id_cliente) {
            return res.status(400).send({ msg: "O campo id_cliente é obrigatório!" });
        }

        if (!id_produto) {
            return res.status(400).send({ msg: "O campo id_produto é obrigatório!" });
        }

        try {
            
            const produto = await conn.select("preco").from("produto").where({ id: id_produto }).first();
            if (!produto) {
                return res.status(404).send({ msg: "Produto não encontrado!" });
            }

            const total = produto.preco; // Total é o preço dos produtos
            const pedido = await conn("pedido").insert({ id_cliente, id_produto, total });

            return res.status(201).send({ msg: `Venda adicionada: total itens ${pedido} total pedido ${total}` });

        } catch (error) {
            console.error(error);
            return res.status(500).send({ msg: "Erro ao cadastrar pedido" });
        }
    },

    consulta: async (req, res) => {
        try {
            const data = await conn.select().from("pedido");
            res.status(200).send(data);
        } catch (error) {
            console.error(error);
            return res.status(500).send({ msg: "Erro ao consultar pedido" });
        }
    },

    // Supondo que você tenha implementado as funções atualizar e deletar
    atualizar: async (req, res) => {
        // Lógica para atualizar um pedido
    },

    deletar: async (req, res) => {
        // Lógica para deletar um pedido
    }
}
