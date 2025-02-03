const conn = require("../mysql-connection");

// CRUD
module.exports = {
    cadastro: async (req, res) => {
        const { id, nome, nacionalidade } = req.body;

        if (!id) {
            return res.status(500).send({ msg: "O campo id é obrigatorio!" });
        }

        if (!nome) {
            return res.status(500).send({ msg: "O campo nome é obrigatorio!" });
        }

        if (!nacionalidade) {
            return res.status(500).send({ msg: "O campo nacionalidade é obrigatorio!" });
        }

        try {
            const id = await conn("id").insert({ id });
            const nome = await conn("nome").insert({ nome });
            const nacionalidade = await conn("nacionalidade").insert({ nacionalidade });

            return res.status(200).send({
                msg: "autor cadastrado com sucesso!"
            });

        } catch (error) {
            console.log(error);
            return res.status(500).send({ msg: "Erro ao cadastrar o autor!" });
        }


    },

    consultar: async (req, res) => {
        try {
            const data = await conn.select().from("autor");
            return res.status(200).send(data);
        } catch (error) {
            console.log(error);
            return res.status(500).send({ msg: "Erro ao consultar autor!" });
        }
    },

    atualizar: async (req, res) => {
        const { nome, nacionalidade } = req.body;
        const { id } = req.params;

        try {
            const autor = await conn.select().from("autor").where({ id });

            if (autor.length <= 0) {
                return res.status(500).send({ msg: `O código ${id} não existe!` })
            }

            await conn("autor").update({
                nome,
                nacionalidade,
            }).where({ id });

            return res.status(200).send({ msg: "autor atualizado com sucesso!" });

        } catch (error) {
            console.log(error);
            return res.status(500).send({ msg: "Erro ao atualizar o autor" });
        }

    },


    deletar: async (req, res) => {
        const { id } = req.params;

        try {
            await conn("autor").where({ id }).del();
            return res.status(200).send({ msg: "autor excluido com sucesso!" });
        } catch (error) {
            console.log(error);
            res.status(500).send({ msg: "Erro ao deletar o autor!" });
        }
    },
}