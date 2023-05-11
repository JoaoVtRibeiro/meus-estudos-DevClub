import Sequelize from 'sequelize'

import User from '../app/models/User' // Model dos Usuários
import Product from '../app/models/Product' // Model dos Produtos

import configDatabase from '../config/database' // Configurações para conexão com o banco de dados


const models = [User, Product]

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