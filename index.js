const express = require('express')
const routerClientes = require('./src/routes/cliente')
const routerFilmes = require('./src/routes/filmes')
const database = require('./src/config/database')

const app = express()
app.use(express.json())
app.use(routerClientes)
app.use(routerFilmes)
const PORT = 3000

database.db
    .sync({ force: true })
    .then((_) => {
        console.info("Banco conectado com sucesso")
        app.listen(PORT, () => {
            console.info(`Servidor rodando na porta ${PORT}`)
        })
    })
    .catch((e) => {
        console.error(`Conexão falhou: ${e}`)
    })