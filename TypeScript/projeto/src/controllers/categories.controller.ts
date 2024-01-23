import { Request, Response } from 'express'

import { CategoriesService } from '../services/categories.services'
import { CategoryModel } from '../database/schemas/category.schema'
import { CategoriesRepository } from '../database/repositories/categories.repository'

export class CategoriesController {
    async create(_: Request, res: Response) { // "_" significa que a propriedade não será utilizada (no caso o request)
        const repository = new CategoriesRepository(CategoryModel) // Repository + Model para o Service
        const service = new CategoriesService(repository) // Instanciando o Service

        const result = await service.create() // Salvando o retorno do service.create() (uma Category) na variavel result

        return res.status(201).json(result)
    }
}
/* 
    Controller: Gerencia as requisições/Saber quem chamar a partir da requisição (ex: qual service ou método) 
*/