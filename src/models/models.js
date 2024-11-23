const database = require('../config/database')


class ModelCliente 
{
    constructor()
    {
        this.model = database.db.define('cliente', {
            id: 
            {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement:true
            },
            nome:
            {
                type: database.db.Sequelize.STRING
            },
            email:
            {
                type: database.db.Sequelize.STRING,
                unique: true
            },
            senha:
            {
                type: database.db.Sequelize.STRING
            }

        })
    }
}

module.exports = new ModelCliente().model

class ModelFilmes 
{
    constructor()
    {
        this.model = database.db.define('filmes', {
            id: 
            {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement:true
            },
            titulo:
            {
                type: database.db.Sequelize.STRING
            },
            faixaEtaria:
            {
                type: database.db.Sequelize.STRING,                
            },
            diretor:
            {
                type: database.db.Sequelize.STRING
            }

        })
    }
}

module.exports = new ModelFilmes().model