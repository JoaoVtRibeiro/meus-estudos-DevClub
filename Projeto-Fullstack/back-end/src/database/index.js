import Sequelize from 'sequelize' // biblioteca que permite a criação de interface entre a aplicação e o banco (relacionais)
import mongoose from 'mongoose' // biblioteca que permite a criação de interface entre a aplicação e o banco (mongodb)

import User from '../app/models/User' // Model dos Usuários
import Product from '../app/models/Product' // Model dos Produtos
import Category from '../app/models/Category'

import configDatabase from '../config/database' // Configurações para conexão com o banco de dados


const models = [User, Product, Category]

class Database {
    constructor() {
        this.init()
        this.mongo()
    }

    init() {
        this.connection = new Sequelize(configDatabase)

        models
            .map((model) => model.init(this.connection)) // Map para gerar a conexão dos models com o banco
            .map(model => model.associate && model.associate(this.connection.models)) // Map para todos os models com associações poderem ser conectar com outros models
    }

    mongo(){
        mongoose.set('strictQuery', false);
        this.mongoConnection = mongoose.connect('mongodb://localhost:27017/codeburger-mongo', { //mongodb://local on o banco está rodando/ nome da base de dados
            useNewUrlParser: true, // configurações padrões necessárias
            useUnifiedTopology: true,
        })
    }
}

export default new Database()