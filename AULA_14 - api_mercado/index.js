/* npm install (baixa todas as dependências se você já tem um arquivo configurado)
 npm init -y (inicia projeto e cria todas as propriedades)
 npm i express (instala pacotes http)
 npm install body-parser (serialização, conversão de objeto para JSON)
 npm i -D nodeman (cria dependências de desenvolvimento que não serão executadas quando buildar)
 npm start (inicia o servidor)
 json nome e propriedade em aspas
 ../ para usar a a pasta
*/

//CONFIGS BÁSICAS
const express = require('express'); // importa express 
const app = express(); // instancia express
const bodyParser = require('body-parser'); // importa bodyparser ou seja fazer a sereliziação
app.use(bodyParser.json()); // usa JSON para parsing - aceitar corpo json

//ROTAS
const indexRoutes = require('./routes/index.routes') // Requerimento do index.routes na const indexRoutes

app.use(indexRoutes)/* middleware constrói uma “cadeia” executada na ordem em que o app. use() é requisitado.
O middleware vai gerenciar a solicitação e redirecionar para outro URL/path/etc. */

// Função de escuta na porta 8080
app.listen(8080, () => {
    console.log("O servidor está rodando na porta 8080");
});