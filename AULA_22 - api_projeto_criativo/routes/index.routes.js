const routes =  require ("express").Router()
const perguntasRouter = require ("./perguntas.router")
const respostasRouter = require ("./respostas.router")

routes.use ("/perguntas", perguntasRouter)
routes.use ("/repostas", respostasRouter)

module.exports = routes
