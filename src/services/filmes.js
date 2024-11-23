const ModelFilmes = require('../models/filmes')

class ServiceFilmes{
    async GetFilmeById(id){
        return ModelFilmes.findByPk(id)
    }
    
    async ExibirFilmes(){
        return ModelFilmes.findAll()
    }

    async AdicionarFilme(titulo, faixaEtaria, diretor){
        if(!titulo || !faixaEtaria || !diretor){
            throw new Error("Favor preencher todos os campos")
        }
        return ModelFilmes.create({titulo, faixaEtaria, diretor})
    }

    async AlterarFilme(id, titulo, faixaEtaria, diretor){
        if(!id){
            throw new Error("Favor insira um id")
        }
        const filme = await ModelFilmes.findByPk(id)
        if(!filme){
            throw new Error("Filme não encontrado. Por favor, insira um id válido.")
        }
        filme.titulo = titulo || filme.titulo
        filme.faixaEtaria = faixaEtaria || filme.faixaEtaria
        filme.diretor = diretor || filme.diretor

        filme.save()
        return filme
    }

    async DeletarFilme(id){
        if(!id){
            throw new Error("Informe um id")
        }
        const filme = await ModelFilmes.findByPk(id)
        if(!filme){
            throw new Error("Filme não encontrado. Por favor, insira um id válido.")
        }
        return filme.destroy()
    }
}

module.exports = new ServiceFilmes()