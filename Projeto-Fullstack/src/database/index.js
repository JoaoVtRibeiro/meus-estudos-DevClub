import Sequelize from 'sequelize'

import User from '../app/models/User' // Model do Usuário

import configDatabase from '../config/database' // Configurações para conexão com o banco de dados

const models = [User]

class Database {
    constructor() {
        this.init()
    }

    init() {
        this.connection = new Sequelize(configDatabase)
        models.map((model) => model.init(this.connection))
    }
}

export default new Database()