const express = require('express')
const ControllerFilmes = require('../controllers/filmes')
const router = express.Router()

router.get('/filme', ControllerFilmes.GetFilmes)
router.post('/filme/cadastrar', ControllerFilmes.AdicionarFilme)
router.put('/filme/:id', ControllerFilmes.AtualizarFilme)
router.delete('/filme/:id', ControllerFilmes.DeletarFilme)

module.exports = router