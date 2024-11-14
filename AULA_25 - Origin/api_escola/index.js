const express = require("express");
const bodyParser = require("body-parser");
const indexRoutes = require("./routes/index.routes");

/* permissão cors da compatibilidade para autenticação */ 
const cors = require ("cors");

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(indexRoutes);

app.listen(8080, () => {
    console.log('O servidor está rodando na porta 8080!');
});