// Bibliotecas e frameworks
import { Router } from 'express'
import multer from 'multer' // biblioteca que permite upload de arquivos
import multerConfig from './config/multer'

// Controllers
import UserController from './app/controllers/UserController'
import SessionController from './app/controllers/SessionController'
import ProductController from './app/controllers/ProductController'
import CategoryController from './app/controllers/CategoryController'
import OrderController from './app/controllers/OrderController'

// Outros
import authMiddleware from './app/middlewares/auth'

const upload = multer(multerConfig)

const routes = new Router()

routes.post('/users', UserController.store)

routes.post('/sessions', SessionController.store)

routes.use(authMiddleware) // Faz com que todas as rotas abaixo desse comando chamem o middleware de autentificação

routes.post('/products', upload.single('file'), ProductController.store)
routes.get('/products', ProductController.index)

routes.post('/categories', CategoryController.store)
routes.get('/categories', CategoryController.index)

routes.post('/orders', OrderController.store)
routes.get('/orders', OrderController.index)
routes.put('/orders', OrderController.update)

export default routes
