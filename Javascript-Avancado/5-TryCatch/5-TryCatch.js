/* 
    Try Catch - Tratamento de erro

    Este comando é bem simples, no "try" estará o trecho de
    código que deve ser executado normalmente, caso houver algum erro
    ele irá cair no catch, podendo ter uma resposta diferente
    Assim sendo possivel que aja um tratamento especifico para erros

    O exemplo de execução estará no http post:
*/

const express = require('express')
const uuid = require('uuid')

const app = express()

app.use(express.json())

const idChecker = (request, response, next) => {
    const { id } = request.params

    const index = usersList.findIndex(user => user.id === id)

    if (index < 0) {
        return response.status(404).json({ error: "User not found" })
    }

    request.id = id
    request.index = index

    next()
}
const usersList = []

app.get('/users', (request, response) => {
    return response.json(usersList)
})

/* ======= Exemplo do Try Catch ======= */

app.post('/users', (request, response) => {
    try { // Try funcionando como um "verificador de erros" 
        const { name, age } = request.body

        if(age < 18) throw new Error("Only allowed users over 18 years old") // throw new Error cria um erro de propósito (mandando para o catch)

        const newUser = { id: uuid.v4(), name, age }

        usersList.push(newUser)

        return response.status(201).json(newUser)
    }
    catch (err){ // Catch "pega" o erro e retorna a resposta adequada para a situação
        return response.status(400).json({error:err.message})
    } finally { // Finally (Opcional) trecho de código executado após o fim do try catch
        console.log("Fim do try catch")
    }
})

app.put('/users/:id', idChecker, (request, response) => {
    const id = request.id
    const { name, age } = request.body
    const index = request.index

    const updatedUser = { id, name, age }

    usersList[index] = updatedUser

    return response.json(updatedUser)
})

app.delete('/users/:id', idChecker, (request, response) => {
    const index = request.index

    usersList.splice(index, 1)

    return response.status(204).json()
})

app.listen(3000, () =>{
    console.log("Server started on port 3000")
})