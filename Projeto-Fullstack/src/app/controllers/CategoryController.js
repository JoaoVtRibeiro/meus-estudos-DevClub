import * as Yup from 'yup'
import Category from '../models/Category'

class CategoryController {
    async store(request, response) { // Validação e criação de uma categoria
        // Validação do nome
        const schema = Yup.object().shape({
            name: Yup.string().required(),
        })

        try {
            await schema.validateSync(request.body, { abortEarly: false })
        } catch (err) {
            return response.status(400).json({ error: err.errors })
        }

        // Criação da categoria no banco
        const { name } = request.body

        const categoryVerification = await Category.findOne({ // Verificação se a categoria já existe
            where: { name }
        })

        if (categoryVerification) {
            return response.status(400).json({ error: 'Category already exists' })
        }

        const { id } = await Category.create({ name })

        return response.json({ id, name })
    }

    async index(request, response) { // Lista de todas as categorias
        const category = await Category.findAll()

        return response.json(category)
    }
}

export default new CategoryController()