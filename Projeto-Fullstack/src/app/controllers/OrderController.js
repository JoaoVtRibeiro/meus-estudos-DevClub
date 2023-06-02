import * as Yup from 'yup'

import Product from '../models/Product'
import Category from '../models/Category'
import Order from '../schemas/Order'

class OrderController {
    async store(request, response) {
        const schema = Yup.object().shape({
            products: Yup.array().required().of(
                Yup.object().shape({
                    id: Yup.number().required(),
                    quantity: Yup.number().required(),
                })
            ),
        })

        try {
            await schema.validateSync(request.body, { abortEarly: false }) // abortyEarly faz com que a validação termina encontrando o primeiro erro (não mostrando outros)
        } catch (err) {
            return response.status(400).json({ error: err.errors })
        }

        const productsId = request.body.products.map(product => product.id)

        const updatedProducts = await Product.findAll({
            where: {
                id: productsId,
            },
            include: [{
                model: Category,
                as: 'category',
                attributes: ['name'],
            },],
        })

        const editedProduct = updatedProducts.map((product) => {
            const productIndex = request.body.products.findIndex(
                (requestBodyProduct) => requestBodyProduct.id == product.id
            )

            const newProduct = {
                id: product.id,
                name: product.name,
                price: product.price,
                category: product.category.name,
                url: product.url,
                quantity: request.body.products[productIndex].quantity
            }

            return newProduct
        })

        const order = { // Informações do usuário chegando pelo token
            user: {
                id: request.userId,
                name: request.userName,
            },
            products: editedProduct,
            status: 'Pedido realizado'
        }

        const orderResponse = await Order.create(order)

        return response.status(201).json(orderResponse)
    }

    async index(request, response){
        const orders = await Order.find() // .find() encontra todas as ocorrencias

        return response.json(orders)
    }
}

export default new OrderController()