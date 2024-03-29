import { Router } from 'express'

import { CategoriesController } from '../controllers/categories.controller'
import { ParamsType, validator } from '../middlewares/validator.middleware'
import { createCategorySchema } from '../dtos/categories.dto'

export const categoriesRoutes = Router() // Permite a criação de rotas

const controller = new CategoriesController() // Instanciando a classe

categoriesRoutes.get('/', controller.index)

categoriesRoutes.post(
    '/', 
    validator({
        schema: createCategorySchema,
        type: ParamsType.BODY
    }),
     controller.create) // ao ser chamada irá executar o método (create) criado no controler