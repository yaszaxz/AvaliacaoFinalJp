const express = require('express')
const ControllerCliente = require('../controllers/cliente')
const router = express.Router()

router.get('/cliente', ControllerCliente.ExibirClientes)
router.post('/cliente/cadastrar', ControllerCliente.AdicionarCliente)
router.put('/cliente/:id', ControllerCliente.AlterarCliente)
router.delete('/cliente/:id', ControllerCliente.DeletarCliente)

module.exports = router