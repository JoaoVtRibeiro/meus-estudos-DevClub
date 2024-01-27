import { CategoriesRepository } from '../database/repositories/categories.repository'
import { CreateCategoryDTO } from '../dtos/categories.dtos'
import { Category } from '../entities/category.entity'

export class CategoriesService {
    constructor(private categoriesRepository: CategoriesRepository) {} // Acesso aos métodos de persistencia de dados

    async create({ title, color }: CreateCategoryDTO): Promise<Category> { // Passando os paramêtros de titulo e cor do DTO para criar a categoria, tendo a Classe Category como "forma" para criação do "bolo" (a categoria)
        const category = new Category({ // Instanciando a classe
            title,
            color
        })

        const createdCategory = await this.categoriesRepository.create(category) // Repassando a category criada para o repository

        return createdCategory
    }
}


/* 
    Service: Responsavel pelas regras de negócio (quem faz a roda girar)

    - Funções como a "async create()" já são publicas mesmo sem o "public"

    - Funções assíncronas no typescript devolvem uma "Promise" e por consequencia, quando ela se revolver, ela devolve um tipo
        No caso, a "Promise" de "create" está devolvendo a entidade "Category"

*/