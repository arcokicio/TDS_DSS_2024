const express = require("express");

const app = express();

// localhost "/"
app.get("/",(request, response)=>{
    response.status(200).send("O servidor esta funcionando")

})

app.listen(8080,(event)=>{
    console.log(" O servidor esta rodando na porta 8080")
})
