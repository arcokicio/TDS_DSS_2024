const conn = require ("../mysql-connection")

module.exports = ({

    consultar: async (req, res) =>{

            try {

            const data = await conn.select().from("perguntas").where({})
            res.status(200).send(data)
            
        } catch (error) {
            console.error(error)
            return res.status(500).send({msg: "erro a alternativa já esta cadastrada"})
        }
    }
       
})