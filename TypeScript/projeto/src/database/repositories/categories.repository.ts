import { Category } from '../../entities/category.entity'
import { CategoryModel } from '../schemas/category.schema'

export class CategoriesRepository {
    constructor(private model: typeof CategoryModel) { }

    async create({ title, color }: Category) { // método para criar os objetos dentro do banco (método da persistência de dados)
        const createdCategory = await this.model.create({ title, color })

        return createdCategory.toObject<Category>()
    }
}