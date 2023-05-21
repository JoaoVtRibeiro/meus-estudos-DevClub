import Sequelize from 'sequelize'

import User from '../app/models/User' // Model dos Usuários
import Product from '../app/models/Product' // Model dos Produtos
import Category from '../app/models/Category'

import configDatabase from '../config/database' // Configurações para conexão com o banco de dados


const models = [User, Product, Category]

class Database {
    constructor() {
        this.init()
    }

    init() {
        this.connection = new Sequelize(configDatabase)

        models
            .map((model) => model.init(this.connection)) // Map para gerar a conexão dos models com o banco
            .map(model => model.associate && model.associate(this.connection.models)) // Map para todos os models com associações poderem ser conectar com outros models
    }
}

export default new Database()