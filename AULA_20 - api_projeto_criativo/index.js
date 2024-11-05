/* 
 Instalar dependências:
    "body-parser": "^1.20.3",
    "express": "^4.21.1",
    "knex": "^3.1.0",
    "mysql2": "^3.11.3"

*/

const express = require ("express")
const bodyParser = require ("body-parser")
const indexRoutes = require ("./routes/index.routes")
const conn = require("./mysql-connection")
const app =  express()
app.use(bodyParser.json())
app.use(indexRoutes)

conn.raw('SELECT 1').then(() => {
    console.log(`Banco de dados conectado com sucesso!`);
}).catch((erro) => {
    console.log(`Erro ao conectar ao banco de dados ${erro}`);
});

app.listen(8080, () => {
    console.log(`O servidor está rodando na porta 8080! 🚀`);
});


