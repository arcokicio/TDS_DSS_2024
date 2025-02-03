const conn = require("../mysql-connection");

// CRUD
module.exports = {
    cadastro: async (req, res) => {
        const { id, titulo, id_autor, genero } = req.body;

        if (!id) {
            return res.status(500).send({ msg: "O campo id é obrigatorio!" });
        }

        if (!titulo) {
            return res.status(500).send({ msg: "O campo titulo é obrigatorio!" });
        }

        if (!id_autor) {
            return res.status(500).send({ msg: "O campo id_autor é obrigatorio!" });
        }

        if (!genero) {
            return res.status(500).send({ msg: "O campo genero é obrigatorio!" });
        }


        try {
            const id = await conn("id").insert({ id });
            const titulo = await conn("titulo").insert({ titulo });
            const id_autor = await conn("id_autor").insert({ id_autor });
            const genero = await conn("genero").insert({ genero });

            return res.status(200).send({
                msg: "livro cadastrado com sucesso!"
            });

        } catch (error) {
            console.log(error);
            return res.status(500).send({ msg: "Erro ao cadastrar o livro!" });
        }


    },

    consultar: async (req, res) => {
        try {
            const data = await conn.select().from("livro");
            return res.status(200).send(data);
        } catch (error) {
            console.log(error);
            return res.status(500).send({ msg: "Erro ao consultar livro!" });
        }
    },
    
    atualizar: async (req, res) => {
        const { titulo, id_autor, genero } = req.body;
        const { id } = req.params;

        try {
            const autor = await conn.select().from("livro").where({ id });

            if (autor.length <= 0) {
                return res.status(500).send({ msg: `O código ${id} não existe!` })
            }

            await conn("livro").update({
                titulo,
                id_autor,
                genero,
            }).where({ id });

            return res.status(200).send({ msg: "livro atualizado com sucesso!" });

        } catch (error) {
            console.log(error);
            return res.status(500).send({ msg: "Erro ao atualizar o livro" });
        }

    },


    deletar: async (req, res) => {
        const { id } = req.params;

        try {
            await conn("livro").where({ id }).del();
            return res.status(200).send({ msg: "livro excluido com sucesso!" });
        } catch (error) {
            console.log(error);
            res.status(500).send({ msg: "Erro ao deletar o livro!" });
        }
    },
}