import { Router } from 'express'

import { ParamsType, validator } from '../middlewares/validator.middleware'
import { createTransactionSchema } from '../dtos/transactions.dto'

export const transactionsRoutes = Router() // Permite a criação de rotas

/* const controller = new CategoriesController(  // Instanciando a classe
    CategoriesFactory.getServiceInstance()
) */

transactionsRoutes.post(
    '/', 
    validator({
        schema: createTransactionSchema,
        type: ParamsType.BODY
    }),
     controller.create) // ao ser chamada irá executar o método (create) criado no controler