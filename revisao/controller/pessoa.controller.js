const conn = require("../db.conn");
//CRUD
module.exports = ({
    inserir: (request, response) => {
        response.status(200).send({ msg: "Olá Mundo!" });
    },
    // consultar: (request, response) => {
    //     conn.raw("SELECT * FROM PESSOAS").then((data) => {
    //         response.status(200).send(data[0]);
    //     }).catch((error) => {
    //         response.status(500).send({ msg: "Erro ao carregar lista de pessoas!" });
    //     });
    // },
    consultar: async (request, response) => {
        try {
            const data = await conn.raw("SELECT * FROM PESSOAS");

            // const data = await conn("PESSOAS");

            response.status(200).send(data[0]);
        } catch (error) {
            response.status(500).send({ msg: "Erro ao carregar lista de pessoas!" });
        }
    },
    atualizar: (request, response) => { },
    deletar: (request, response) => { },
})