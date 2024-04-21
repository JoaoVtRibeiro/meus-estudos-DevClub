import * as Yup from 'yup'
import Category from '../models/Category'
import User from '../models/User'

class CategoryController { // Validação e criação de uma categoria
    // Validação do nome
    async store(request, response) {
        try {
            const schema = Yup.object().shape({
                name: Yup.string().required()
            })

            try {
                await schema.validateSync(request.body, { abortEarly: false })
            } catch (err) {
                return response.status(400).json({ error: err.errors })
            }

            // Validação de admin
            const { admin: isAdmin } = await User.findByPk(request.userId) // Verificação se a categoria já existe

            if (!isAdmin) {
                return response.status(401).json()
            }

            // Criação da categoria no banco
            const { name } = request.body
            const { filename: path } = request.file

            const categoryExists = await Category.findOne({ // Verificação se a categoria já existe
                where: { name }
            })

            if (categoryExists) {
                return response
                    .status(400)
                    .json({ error: 'Category already exists' })
            }

            const { id } = await Category.create({ name, path })

            return response.json({ name, id })
        } catch (err) {
            console.log(err)
        }
    }

    async index(request, response) { // Lista de todas as categorias
        const category = await Category.findAll()

        return response.json(category)
    }

    async update(request, response) { // Atualização dos dados
        try {
            // Validação do nome
            const schema = Yup.object().shape({
                name: Yup.string()
            })

            try {
                await schema.validateSync(request.body, { abortEarly: false })
            } catch (err) {
                return response.status(400).json({ error: err.errors })
            }

            // Validação de admin
            const { admin: isAdmin } = await User.findByPk(request.userId)

            if (!isAdmin) {
                return response.status(401).json()
            }

            // Dados
            const { name } = request.body
            const { id } = request.params

            // Verificação se a categoria existe
            const category = await Category.findByPk(id)

            if (!category) {
                return response
                    .status(401)
                    .json({ error: 'Make sure your category id is correct' })
            }

            let path
            if (request.file) {
                path = request.file.filename
            }

            await Category.update({ name, path }, { where: { id } })

            return response.status(200).json()
        } catch (err) {
            console.log(err)
        }
    }
}

export default new CategoryController()
