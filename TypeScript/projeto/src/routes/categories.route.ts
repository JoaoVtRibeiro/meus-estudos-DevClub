import { Router } from 'express'

import { CategoriesController } from '../controllers/categories.controller'

export const categoriesRoutes = Router() // Permite a criação de rotas

const controller = new CategoriesController() // Instanciando a classe

categoriesRoutes.post('/', controller.create) // ao ser chamada irá executar o método (create) criado no controler