const express = require('express')
const uuid = require('uuid')

const app = express()

app.use(express.json())


// Array simulando o que seria o banco de dados
const orderList = []

// Middlewares
const idChecker = (request, response, next) =>{ // Verifica se o id existe
    const {id} = request.params

    const index = orderList.findIndex(order => order.id === id)

    if (index < 0) return response.status(404).json({error:"Order not found"})

    request.index = index

    next()
}

const methodAndUrl = (request, response, next) =>{ // Mostra no console o método e url da requisição

    console.log(`
    Requisição realizada!

    Método HTTP: ${request.method}
    Url: ${request.originalUrl}`)
    
    next()
}

// Rotas
app.post('/order-creation', methodAndUrl, (request, response) =>{ // Cria novos pedidos 
    const {order, clientName, price} = request.body

    const newOrder = {id: uuid.v4(), order, clientName, price, status:"Em preparação"}

    orderList.push(newOrder)

    return response.status(201).json(newOrder)
})

app.get('/order-list', methodAndUrl, (request, response) =>{ // Mostra todos os pedidos já feitos

    return  response.json(orderList)
})

app.put('/order-change/:id', idChecker, methodAndUrl, (request, response) =>{ // Altera os dados do pedido
    const {id} = request.params
    const {order, clientName, price} = request.body
    const index = request.index

    const orderChange = {id, order, clientName, price, status:"Em preparação"}

    orderList[index] = orderChange

    return response.json(orderChange)
})

app.delete('/order-delete/:id', idChecker, methodAndUrl, (request, response) =>{ // Deleta um pedido
    const index = request.index

    orderList.splice(index, 1)

    return response.status(204).json()

})

app.get('/order-check/:id', idChecker, methodAndUrl, (request, response) =>{ // Mostra um pedido em específico
    const index = request.index

    return  response.json(orderList[index])
})

app.patch('/order-ready/:id', idChecker, methodAndUrl, (request, response) =>{ // Atualiza o status do pedido
    const index = request.index

    const newStatus = "Pronto"

    orderList[index].status = newStatus

    return response.json(orderList[index])
})


// Porta do server
app.listen(3000, () =>{
    console.log("Server started on port 3000")
})
