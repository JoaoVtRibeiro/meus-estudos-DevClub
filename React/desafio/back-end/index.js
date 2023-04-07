const express = require('express')
const uuid = require('uuid')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

const demandList = []

app.get('/demand-list', (request, response) => {
    return response.json(demandList)
})

app.post('/demand-create', (request, response) => {
    const { demand, name } = request.body

    const newDemand = { id: uuid.v4(), demand, name }

    demandList.push(newDemand)

    return response.status(201).json(newDemand)
})

app.delete('/demand-delete/:id', (request, response) => {
    const { id } = request.params

    const index = demandList.findIndex(demand => demand.id === id)

    demandList.splice(index, 1)

    return response.status(204).json()
})

app.listen(3001, () => {
    console.log("App started on port 3001")
})