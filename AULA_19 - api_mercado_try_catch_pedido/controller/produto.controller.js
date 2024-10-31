const conn = require("../mysql-connection");

module.exports = {
    cadastro: async (req, res) => {
        const { nome, preco } = req.body;

        if (!preco) {
            return res.status(309).send({ msg: "É obrigatorio enviar o campo preco!" });
        } else if (typeof preco !== "number") {
            return res.status(309).send({ msg: "O campo preco precisa ser do tipo numerico!" });
        }

        try {
            const data = await conn.raw(`INSERT INTO PRODUTO(nome, preco) VALUES ('${nome}', '${preco}'`);
            return res.status(200).send(data[0]);
        } catch (error) {
            console.log(error)
            res.status(500).send({ msg: "Erro ao cadastrar produto" })
        }

    },

    consultar: async (req, res) => {

        try {
            const data = await conn.raw("SELECT * FROM PRODUTO");
        } catch (error) {
            console.log(error);
            return res.status(500).send({ msg: "erro ao consultar produtos" });
        }

        console.log(data);
        res.send(data[0]);

    },

    atualizar: async (req, res) => {
        const { nome, preco } = req.body;
        try {
            const data = await conn.raw(`UPDATE CLIENTE SET preco='${preco}',
            WHERE id =  ${nome}`)
            console.log(data);
            res.status(200).send({ msg: "Preco atualizado com sucesso!" })
        } catch {
            console.log(error);
            res.status(500).send({ msg: "Erro ao atualizar o preço!" });

        }
    },

    deletar: async (req, res) => {
        const { id } = req.params;
        try {
            const result = await conn.raw(`DELETE FROM CLIENTE WHERE ID = ?`, [id]);

            if (result.affectedRows === 0) {
                return res.status(404).send({ msg: "cliente não encontrado" });
            }
            return res.status(404).send({ msg: "Cliente não encontrado" });

        } catch (error) {
            console.log(error);
            return res.status(500).send({ msg: "Erro ao deletar o produto" });
        }


    },
    buscaPorId: async (req, res) => {
        const { id } = req.params;

        // const data = await conn.raw(`SELECT * FROM PRODUTO WHERE id = ${id}`);
        const data = await conn.select("nome", "preco")
            .from("produto")
            .where({ id });

        return res.status(200).send(data);
    }

}










