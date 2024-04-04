import { Router } from 'express'

import { ParamsType, validator } from '../middlewares/validator.middleware'
import { createTransactionSchema } from '../dtos/transactions.dto'
import { TransactionsController } from '../controllers/transactions.controller'
import { TransactionsFactory } from '../factories/transactions.factory'

export const transactionsRoutes = Router() // Permite a criação de rotas

const controller = new TransactionsController(  // Instanciando a classe
    TransactionsFactory.getServiceInstance()
)

transactionsRoutes.post(
    '/', 
    validator({
        schema: createTransactionSchema,
        type: ParamsType.BODY
    }),
     controller.create) // ao ser chamada irá executar o método (create) criado no controler