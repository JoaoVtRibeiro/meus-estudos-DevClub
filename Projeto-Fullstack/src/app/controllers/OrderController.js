import * as Yup from 'yup'

import Product from '../models/Product'
import Category from '../models/Category'
import Order from '../schemas/Order'

class OrderController {
    async store(request, response) {
        const schema = Yup.object().shape({
            product: Yup.array().required().of(
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
                id: productsId
            },
            include: {
                model: Category,
                as: 'category',
                attributes: ['name']
            }
        })

        const editedProduct = updatedProducts.map((upProduct) => {
            const productIndex = request.body.products.findIndex(
                (requestBodyProduct) => requestBodyProduct.id === upProduct.id
            )

            const newProduct = {
                id: upProduct.id,
                name: upProduct.name,
                price: upProduct.price,
                category: upProduct.category.name,
                url: upProduct.url,
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
}

export default new OrderController()