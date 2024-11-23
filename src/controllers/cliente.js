const ServiceClientes = require('../services/cliente')

class ControllerCliente{
    async ExibirClientes(req,res){
        try{
            const clientes = await ServiceClientes.ExibirClientes()
            res.send({msg: clientes})
        }catch (error){
            res.status(500).send({ msg: error.message })
        }
    }

    async AdicionarCliente(req,res){
        try{
            const {nome, email, senha} = req.body
            const cliente = await ServiceClientes.AdicionarCliente(nome, email, senha)
            res.send({msg: cliente})
        }catch(error){
            res.status(500).send({ msg: error.message })
        }
    }

    async AlterarCliente(req,res){
        try{
            const id = req.params.id
            const nome = req.body.nome
            const email = req.body.email
            const senha = req.body.senha

            const cliente = await ServiceClientes.AlterarCliente(id, nome, email, senha)
            res.send({msg: cliente})
        }catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }

    async DeletarCliente(req,res){
        try{
            const id = req.params.id
            await ServiceClientes.DeletarCliente(id)
            res.status(204).send()
        }catch(error){
            res.status(500).send({ msg: error.message })
        }
    }
}

module.exports = new ControllerCliente()