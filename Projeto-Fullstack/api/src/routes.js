// Bibliotecas e frameworks
import { Router } from 'express'
import multer from 'multer' // Biblioteca que permite upload de arquivos
import multerConfig from './config/multer'

// Controllers
import ProductController from './app/controllers/ProductController'
import SessionController from './app/controllers/SessionController'
import CategoryController from './app/controllers/CategoryController'
import UserController from './app/controllers/UserController'
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
routes.put('/products/:id', upload.single('file'), ProductController.update)

routes.post('/categories', upload.single('file'), CategoryController.store)
routes.get('/categories', CategoryController.index)
routes.put('/categories/:id', upload.single('file'), CategoryController.update)

routes.post('/orders', OrderController.store)
routes.put('/orders/:id', OrderController.update)
routes.get('/orders', OrderController.index)

export default routes
