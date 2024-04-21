'use strict'

const sequelize = require('sequelize')

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.addColumn('products', 'category_id', {
            type: sequelize.INTEGER,

            references: { model: 'categories', key: 'id' },

            onUpdate: 'CASCADE',

            onDelete: 'SET NULL',

            allowNull: true
        })
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.removeColumn('products', 'category_id')
    }
}
