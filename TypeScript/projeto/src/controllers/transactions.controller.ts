import { NextFunction, Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'

import { TransactionsService } from '../services/transactions.services'
import { CreateTransactionDTO } from '../dtos/transactions.dto'

export class TransactionsController {
    constructor(private transactionsService: TransactionsService) { }

    create = async (
        req: Request<unknown, unknown, CreateTransactionDTO>, // Os Generics (basta passar o mouse em cima do Request) <P, ResBody, ReqBody> 
        res: Response,
        next: NextFunction,
    ) => {
        try {
            const { title, amount, categoryId, date, type } = req.body

            const result = await this.transactionsService.create({ title, amount, categoryId, date, type }) // Salvando o retorno do service.create() (uma Category) na variavel result

            return res.status(StatusCodes.CREATED).json(result)
        } catch (err) {
            next(err)
        }
    }

    index = async (
        req: Request,
        res: Response,
        next: NextFunction,
    ) => {
        try {
            const result = await this.transactionsService.index()

            return res.status(StatusCodes.OK).json(result)
        } catch (err) {
            next(err)
        }
    }
}
/* 
    Controller: Gerencia as requisições/Saber quem chamar a partir da requisição (ex: qual service ou método) 
*/