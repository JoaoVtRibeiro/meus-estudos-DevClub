import { NextFunction, Request, Response } from 'express'

import { CategoriesService } from '../services/categories.services'
import { CategoryModel } from '../database/schemas/category.schema'
import { CreateCategoryDTO } from '../dtos/categories.dtos'
import { CategoriesRepository } from '../database/repositories/categories.repository'

export class CategoriesController {
    async create(
        req: Request<unknown, unknown, CreateCategoryDTO>, // Os Generics (basta passar o mouse em cima do Request) <P, ResBody, ReqBody> 
        res: Response,
        next: NextFunction,
    ) {
        try {
            const { title, color } = req.body

            const repository = new CategoriesRepository(CategoryModel) // Repository + Model para o Service
            const service = new CategoriesService(repository) // Instanciando o Service

            const result = await service.create({ title, color }) // Salvando o retorno do service.create() (uma Category) na variavel result

            return res.status(201).json(result)
        } catch(err) {
            next(err)
        }
    }
}
/* 
    Controller: Gerencia as requisições/Saber quem chamar a partir da requisição (ex: qual service ou método) 
*/