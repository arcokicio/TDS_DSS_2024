// Verificar as respostas

module.exports = {

post: async (req, res) => {
    const respostasUsuario = req.body.respostas; 

    if (!respostasUsuario || (respostasUsuario).length === 0) {
        return res.status(400).send({ msg: "Nenhuma resposta fornecida." });
    }

    try {
        
        const perguntas = await conn.select().from("perguntas").where({});

      
        const resultados = [];

        
        for (const pergunta of perguntas) {
            const idPergunta = pergunta.id;
            const respostaCorreta = pergunta.resposta_correta;
            const respostaUsuario = respostasUsuario[idPergunta];

            // PROBLEMA COM MAIUSCULA MInusc
            const isCorreta = respostaCorreta === respostaUsuario
            
            // Adicionar o resultado
            resultados.push({
                perguntaId: idPergunta,
                resultado: isCorreta ? 'Correta' : 'Errada',
                respostaUsuario: respostaUsuario,
                respostaCorreta: respostaCorreta
            });
        }

        // Retornar os resultados das verificações
        res.status(200).send({
            msg: "Resultados das respostas",
            resultados: resultados
        });

    } catch (error) {
        console.error(error);
        return res.status(500).send({ msg: "Erro ao verificar respostas" });
    }
}
}