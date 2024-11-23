const express = require('express')
const ControllerFilmes = require('../controllers/filmes')
const router = express.Router()

router.get('/filme', ControllerFilmes.ExibirFilmes)
router.post('/filme/cadastrar', ControllerFilmes.AdicionarFilme)
router.put('/filme/:id', ControllerFilmes.AlterarFilme)
router.delete('/filme/:id', ControllerFilmes.DeletarFilme)

module.exports = router