import * as Yup from 'yup'
import Product from '../models/Product'
import Category from '../models/Category'
import User from '../models/User'

class ProductController {
    async store(request, response) { // Validação e criação de um produto
        // Validação dos dados
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            price: Yup.number().required(),
            category_id: Yup.number().required(),
            offer: Yup.boolean()
        })

        try {            
            await schema.validateSync(request.body, { abortEarly: false })
        } catch (err) {
            return response.status(400).json({ error: err.errors })
        }
        
        // Validação de admin
        const { admin: isAdmin } = await User.findByPk(request.userId) // .findByPk - encontrar por primary key

        if (!isAdmin) {
            return response.status(401).json()
        }

        // Criação do produto no banco
        const { filename: path } = request.file
        const { name, price, category_id, offer } = request.body

        const product = await Product.create({
            name,
            price: price,
            category_id,
            path,
            offer
        })

        return response.json(product)
    }
    
    async index(request, response) { // Lista de todos os produtos
        const products = await Product.findAll({
            include: [
                {
                    model: Category,
                    as: 'category',
                    attributes: ['id', 'name']
                }
            ]
        })

        console.log(request.userId)
        return response.json(products)
    }

    async update(request, response) { // Atualizar dados
        // Validação dos dados
        const schema = Yup.object().shape({
            name: Yup.string(),
            price: Yup.number(),
            category_id: Yup.number(),
            offer: Yup.boolean()
        })

        try {            
            await schema.validateSync(request.body, { abortEarly: false })
        } catch (err) {
            return response.status(400).json({ error: err.errors })
        }
        
        // Validação de admin
        const { admin: isAdmin } = await User.findByPk(request.userId) // .findByPk - encontrar por primary key

        if (!isAdmin) {
            return response.status(401).json()
        }
        
        // Validação da existência do produto

        const { id } = request.params

        const product = await Product.findByPk(id)

        if (!product) {
            return response
                .status(401)
                .json({ error: 'Make sure your product ID is correct' })
        }

        // Verificação do envio de arquivo
        
        let path
        if (request.file) {
            path = request.file.filename
        }

        // Atualização dos dados do produto

        const { name, price, category_id, offer } = request.body

        await Product.update(
            {
                name,
                price,
                category_id,
                path,
                offer
            },
            { where: { id } }
        )

        return response.status(200).json()
    }
}

export default new ProductController()
