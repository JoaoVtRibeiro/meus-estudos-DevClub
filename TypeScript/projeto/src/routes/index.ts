import { Router } from 'express' // Permite a criação de rotas

import { baseRoutes } from './base.route'
import { categoriesRoutes } from './categories.route'

export const routes = Router()

routes.use('/', baseRoutes)
routes.use('/categories', categoriesRoutes)

/* 
    Route: As Rotas, definem a url, são onde a resposta final para o usúario é enviada e onde as requisições são feitas 
*/
