import mongoose from 'mongoose'

const OrderSchema = new mongoose.Schema(
    {
        user: {
            id: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            }
        },

        products: [
            {
                id: {
                    type: Number,
                    required: true
                },
                name: {
                    type: String,
                    required: true
                },
                price: {
                    type: Number,
                    required: true
                },
                category: {
                    type: String,
                    required: true
                },
                url: {
                    type: String,
                    required: true
                },
                quantity: {
                    type: Number,
                    required: true
                }
            }
        ],
        status: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true // Parecido com update_at created_at, cria as informações de data 
    }
)

export default mongoose.model('Order', OrderSchema) // .model(Nome do model/schema e o nome da constante criada)
