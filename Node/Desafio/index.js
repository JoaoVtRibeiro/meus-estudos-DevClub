const express = require('express')
const uuid = require('uuid')

const app = express()

app.use(express.json())

/* 
    [x] post - criar os pedidos 
    [x] get - mostra todos os pedidos
    [x] put - altera o pedido
    [x] delete - deletar um pedido
    [x] get - mostra um em especifico
    [x] patch - atualiza o status

    midleware
    [x] - verifica os id
    [x] - mostra o metodo de requisição e url

*/


// Array simulando o que seria o banco de dados
const orderList = []

// Middlewares
const idChecker = (request, response, next) =>{
    const {id} = request.params

    const index = orderList.findIndex(order => order.id === id)

    if (index < 0) return response.status(404).json({error:"Order not found"})

    request.index = index

    next()
}

const methodAndUrl = (request, response, next) =>{

    console.log(`
    Requisição realizada!

    Método HTTP: ${request.method}
    Url: ${request.originalUrl}`)
    
    next()
}

// Rotas
app.post('/order-creation', methodAndUrl, (request, response) =>{
    const {order, clientName, price} = request.body

    const newOrder = {id: uuid.v4(), order, clientName, price, status:"Em preparação"}

    orderList.push(newOrder)

    return response.status(201).json(newOrder)
})

app.get('/order-list', methodAndUrl, (request, response) =>{

    return  response.json(orderList)
})

app.put('/order-change/:id', idChecker, methodAndUrl, (request, response) =>{
    const {id} = request.params
    const {order, clientName, price} = request.body
    const index = request.index

    const orderChange = {id, order, clientName, price, status:"Em preparação"}

    orderList[index] = orderChange

    return response.json(orderChange)
})

app.delete('/order-delete/:id', idChecker, methodAndUrl, (request, response) =>{
    const index = request.index

    orderList.splice(index, 1)

    return response.status(204).json()

})

app.get('/order-check/:id', idChecker, methodAndUrl, (request, response) =>{
    const index = request.index

    return  response.json(orderList[index])
})

app.patch('/order-ready/:id', idChecker, methodAndUrl, (request, response) =>{
    const index = request.index

    const newStatus = "Pronto"

    orderList[index].status = newStatus

    return response.json(orderList[index])
})


// Porta do server
app.listen(3000, () =>{
    console.log("Server started on port 3000")
})
