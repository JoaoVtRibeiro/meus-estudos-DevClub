import { Category } from '../../entities/category.entity'
import { CategoryModel } from '../schemas/category.schema'

export class CategorieesRepository {
    constructor(private model: typeof CategoryModel) {}

    async create({ title, color}: Category) {
        const createdCategory = await this.model.create({ title, color})

        return createdCategory.toObject<Category>()
    }
}