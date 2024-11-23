const ModelCliente = require('../models/models')

class ServiceCliente{
    async GetPessoaById(id){
        return ModelCliente.findByPk(id)
    }
    
    async ExibirClientes(){
        return ModelCliente.findAll()
    }

    async AdicionarCliente(nome, email, senha){
        if(!nome || !email || !senha){
            throw new Error("Favor preencher todos os campos")
        }
        return ModelCliente.create({nome, email, senha})
    }

    async AlterarCliente(id, email, senha){
        if(!id){
            throw new Error("Favor insira um id")
        }
        const cliente = await ModelCliente.findByPk(id)
        if(!cliente){
            throw new Error("Cliente não encontrado. Por favor, insira um id válido.")
        }
        cliente.nome = nome || cliente.nome
        cliente.email = email || cliente.email
        cliente.senha = senha || cliente.senha

        cliente.save()
        return cliente
    }

    async DeletarCliente(id){
        if(!id){
            throw new Error("Informe um id")
        }
        const cliente = await ModelCliente.findByPk(id)
        if(!cliente){
            throw new Error("Cliente não encontrado. Por favor, insira um id válido.")
        }
        return cliente.destroy()
    }
}

module.exports = new ServiceCliente()