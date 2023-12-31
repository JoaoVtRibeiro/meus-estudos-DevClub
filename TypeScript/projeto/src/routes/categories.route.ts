import { Router } from 'express'

import { CategoriesController } from '../controllers/categories.controller'

export const categoriesRoutes = Router() // Permite a criação de rotas

const controller = new CategoriesController() // Instanciando a classe

categoriesRoutes.get('/', controller.create) // rota base irá executar o método (create) criado no controler