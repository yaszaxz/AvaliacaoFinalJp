const ServiceFilmes = require('../services/filmes')

class ControllerFilmes{
    async ExibirFilmes(req,res){
        try{
            const filmes = await ServiceFilmes.ExibirFilmes()
            res.send({msg: filmes})
        }catch (error){
            res.status(500).send({ msg: error.message })
        }
    }

    async AdicionarFilme(req,res){
        try{
            const {titulo, faixaEtaria, diretor} = req.body
            const filme = await ServiceFilmes.AdicionarFilme(titulo, faixaEtaria, diretor)
            res.send({msg: filme})
        }catch(error){
            res.status(500).send({ msg: error.message })
        }
    }

    async AlterarFilme(req,res){
        try{
            const id = req.params.id
            const titulo = req.body.titulo
            const faixaEtaria = req.body.faixaEtaria
            const diretor = req.body.diretor

            const filme = await ServiceFilmes.AlterarFilme(id, titulo, faixaEtaria, diretor)
            res.send({msg: filme})
        }catch (error) {
            res.status(500).send({ msg: error.message })
        }
    }

    async DeletarFilme(req,res){
        try{
            const id = req.params.id
            await ServiceFilmes.DeletarFilme(id)
            res.status(204).send()
        }catch(error){
            res.status(500).send({ msg: error.message })
        }
    }
}
module.exports = new ControllerFilmes()
