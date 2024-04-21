import express from 'express'
import routes from './routes'
import { resolve } from 'path'
import cors from 'cors'

import './database'
class App {
    constructor() {
        this.app = express()
        this.app.use(cors()) // Permitindo que todas as origens http tenham acesso a essa api

        this.middlewares()
        this.routes()
    }

    middlewares() {
        this.app.use(express.json())
        this.app.use(
            '/product-file', // Rota para conseguir ver o arquivo no navegador (fora da aplicação)
            express.static(resolve(__dirname, '..', 'uploads'))
        )

        this.app.use(
            '/category-file',
            express.static(resolve(__dirname, '..', 'uploads'))
        )
    }

    routes() {
        this.app.use(routes)
    }
}

export default new App().app
