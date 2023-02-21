/* 
    Middlewares

    Uma função que serve como um "intermediador" entre o 
    servidor/aplicação e as requisições dos clientes, ele pode
    alterar o request e response ou parar a execução do código.

    Ele é usado realizar várias tarefas, como autenticação/verificação, 
    logging, compressão de arquivos, manipulação de erros, entre outras possíveis funções.

    Middleware facilita a manutenção do código e a adição de novas funcionalidades

    Obs: Além dos parâmetros request e response, existe o "next" 
    que passa o processo no código para o próximo middleware no código, 
    lembrando que os verbos http também são considerados middlewares
  
*/

const express = require('express')
const uuid = require('uuid')

const app = express()

app.use(express.json())


// Middleware
const idChecker = (request, response, next) => {
    const {id} = request.params

    const index = usersList.findIndex(user => user.id === id)

    if(index < 0){
        return response.status(404).json({error: "User not found"})
    }

    request.id = id
    request.index = index

    next()
}


const usersList = []

app.get('/users', (request, response) => {
    return response.json(usersList)
})

app.post('/users', (request, response) => {
    const { name, age } = request.body

    const newUser = { id: uuid.v4(), name, age }

    usersList.push(newUser)

    return response.status(201).json(newUser)
})

app.put('/users/:id', idChecker, (request, response) => {
    const id = request.id
    const {name, age} = request.body
    const index = request.index

    const updatedUser = {id, name, age}

    usersList[index] = updatedUser

    return response.json(updatedUser)
})

app.delete('/users/:id', idChecker, (request, response) => {
    const index = request.index

    usersList.splice(index, 1)

    return response.status(204).json()
})


app.listen(3000, () => {
    console.log("Server started on port 3000")
})
