const express = require('express')
const uuid = require('uuid')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

const usersList = []

app.get('/users', (request, response) =>{
    return response.json(usersList)
})

app.post('/users', (request, response) =>{
    const {name, age} = request.body

    const user = {id: uuid.v4(), name, age}

    usersList.push(user)

    return response.status(201).json(user)
})

app.delete('/users/:id', (request, response) =>{
    const {id} = request.params

    const index = usersList.findIndex(user => user.id === id)

    if(index < 0){
        return response.status(404).json({message: "User not founded"})
    }

    usersList.splice(index, 1)

    return response.status(204).json()
})

app.listen(3001, () =>{
    console.log("App started on port 3001")
})