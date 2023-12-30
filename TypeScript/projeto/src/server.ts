import 'dotenv/config'
import express, { json } from 'express'

import { routes } from './routes'
import { setupMongo } from './database'

const app = express()

setupMongo().then(() => {
    app.use(json())
    app.use(routes)

    app.listen(3333, () => {
        console.log('Server is running at port 3333')
    })
})

/* 
    Arquitetura dos caminhos do projeto

        Request:
            Entity -> Service -> Controller -> Route

        Response:
            Route -> Controller -> Service -> Entity

            Entity: Modelagem os dados, o "coração" do projeto (Não necessáriamente só os dados do banco, mas também auxiliares)
            Service: Responsavel pelas regras de negócio (quem faz a roda girar)
            Controller: Gerencia as requisições/Saber quem chamar a partir da requisição (ex: qual service ou método)
            Route: As Rotas, definem a url, são onde a resposta final para o usúario é enviada e onde as requisições são feitas
*/