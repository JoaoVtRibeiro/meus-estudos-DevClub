'use strict'

module.exports = {
    up: async (queryInterface, Sequelize) => { // Método que é executado no banco de dados quando a migration é aplicada
        await queryInterface.createTable('users', {
            id: {
                type: Sequelize.UUID, // Define o tipo do campo
                defaultValue: Sequelize.UUIDV4, // Define o valor padrão (nessse caso a biblioteca uuid irá gerar um id aleatório)
                allowNull: false, // Não permite o campo ser nulo (não ter valor)
                primaryKey: true // Define o campo como chave primária
            },

            name: {
                type: Sequelize.STRING,
                allowNull: false
            },

            email: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true // Define o valor desse campo como único (dois usuarios não podem ter o mesmo valor)
            }, 
            
            password_hash: { // Campo que será criptografado
                type: Sequelize.STRING,
                allowNull: false
            },

            admin: {
                type: Sequelize.BOOLEAN,
                defaultValue: false, // Como a maioria dos usúarios não serão admin, o padrão será falso
                allowNull: false
            },

            created_at: {                
                type: Sequelize.DATE,
                allowNull: false
            },

            updated_at: {                
                type: Sequelize.DATE,
                allowNull: false
            }
        })
    },

    down: async (queryInterface) => { // Método que pode reverter alterações caso necessário, executado quando a migration é revertida
        await queryInterface.dropTable('users')
    }
}
