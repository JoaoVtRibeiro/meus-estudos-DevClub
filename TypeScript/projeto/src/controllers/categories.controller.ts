import { Request, Response } from 'express'

import { CategoriesService } from '../services/categories.services'
import { CategoryModel } from '../database/schemas/category.schema'
import { CategoriesRepository } from '../database/repositories/categories.repository'

export class CategoriesController {
    async create(_: Request, res: Response) {
        const repository = new CategoriesRepository(CategoryModel)
        const service = new CategoriesService(repository)

        const result = await service.create()

        return res.status(201).json(result)
    }
}
/* 
    Controller: Gerencia as requisições/Saber quem chamar a partir da requisição (ex: qual service ou método) 
*/