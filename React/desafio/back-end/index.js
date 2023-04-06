const express = require('express')
const uuid = require('uuid')
const cors = requiere('cors')

const app = express()
app.use(express.json())
app.use(cors())

const demands = []

app.get('/demand-list', (request, response) => {
    return response.json(demands)
})

app.post('/demand-creation', (request, response) => {
    const { name, demand } = request.body

    const newDemand = { id: uuid.v4(), name, demand }

    return response.status(201).json(newDemand)
})

app.delete('demand-delete/:id', (request, response) => {
    const { id } = request.params

    const index = demands.findIndex(demand => demand.id === id)

    demands.splice(index, 1)

    return response.status(204).json()
})

app.listen(3001, () => {
    console.log("App started on port 3001")
})