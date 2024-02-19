import { StatusCodes } from 'http-status-codes'
import { CategoriesRepository } from '../database/repositories/categories.repository'
import { CreateCategoryDTO } from '../dtos/categories.dtos'
import { Category } from '../entities/category.entity'
import { AppError } from '../errors/app.error'

export class CategoriesService {
    constructor(private categoriesRepository: CategoriesRepository) { } // Acesso aos métodos de persistencia de dados

    async create({ title, color }: CreateCategoryDTO): Promise<Category> { // Passando os paramêtros de titulo e cor do DTO para criar a categoria, tendo a Classe Category como "forma" para criação do "bolo" (a categoria)
        const foundCategory = await this.categoriesRepository.findByTitle(title) // Irá utilizar o método para verificar se já tem uma categoria com esse titulo

        if (foundCategory) { // Caso encontre, um erro será ativado, avisando que a categoria já existe
            throw new AppError('Category already exists.', StatusCodes.BAD_REQUEST)
        }

        const category = new Category({ // Instanciando a classe
            title,
            color
        })

        const createdCategory = await this.categoriesRepository.create(category) // Repassando a category criada para o repository

        return createdCategory
    }

    async index(): Promise<Category[]> {
        
    }
}


/* 
    Service: Responsavel pelas regras de negócio (quem faz a roda girar)

    - Funções como a "async create()" já são publicas mesmo sem o "public"

    - Funções assíncronas no typescript devolvem uma "Promise" e por consequencia, quando ela se revolver, ela devolve um tipo
        No caso, a "Promise" de "create" está devolvendo a entidade "Category"

*/