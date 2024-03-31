import { NextFunction, Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'

import { CategoriesService } from '../services/categories.services'
import { CreateCategoryDTO } from '../dtos/categories.dto'

export class CategoriesController {
    constructor(private categoriesService: CategoriesService) { }

    create = async (
        req: Request<unknown, unknown, CreateCategoryDTO>, // Os Generics (basta passar o mouse em cima do Request) <P, ResBody, ReqBody> 
        res: Response,
        next: NextFunction,
    ) => {
        try {
            const { title, color } = req.body

            const result = await this.categoriesService.create({ title, color }) // Salvando o retorno do service.create() (uma Category) na variavel result

            return res.status(StatusCodes.CREATED).json(result)
        } catch (err) {
            next(err)
        }
    }

     index = async (_: Request, res: Response, next: NextFunction) => {
        try {
            const result = await this.categoriesService.index()

            return res.status(StatusCodes.OK).json(result)
        } catch (err) {
            next(err)
        }
    }
}
/* 
    Controller: Gerencia as requisições/Saber quem chamar a partir da requisição (ex: qual service ou método) 
*/