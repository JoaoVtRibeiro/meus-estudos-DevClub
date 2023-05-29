import * as Yup from 'yup'

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

        const order = { // Informações do usuário chegando pelo token
            user: {
                id: request.userId,
                name: request.userName,
            }
        }

        return response.status(201).json(request.body)
    }
}

export default new OrderController()