import { CategoriesRepository } from '../database/repositories/categories.repository'
import { Category } from '../entities/category.entity'

export class CategoriesService {
    constructor(private categoriesRepository: CategoriesRepository) {}

    async create(): Promise<Category> {
        const category = new Category({ // Instanciando a classe
            title: 'Example Category',
            color: '#ff33bb'
        })

        const createdCategory = await this.categoriesRepository.create(category)

        return category
    }
}


/* 
    Service: Responsavel pelas regras de negócio (quem faz a roda girar)

    - Funções como a "async create()" já são publicas mesmo sem o "public"

    - Funções assíncronas no typescript devolvem uma "Promise" e por consequencia, quando ela se revolver, ela devolve um tipo
        No caso, a "Promise" de "create" está devolvendo a entidade "Category"

*/