/* 
    Get => Buscar informações 
    Post => Criar informações
    Put / Patch => Alterar/Atualizar informações
    Delete => Deletar informações

    Obs: Os endereços de rota podem ter o mesmo nome contanto que o verbo http seja diferente
*/

const { response } = require('express')
const express = require('express')
const uuid = require('uuid') // Biblioteca que permite gerar id único universal

const app = express()

app.use(express.json())

// Essa array sera utilizada como um banco de dados (não é utilizada em projetos reais), apenas para fins didáticos 
const usersList = []

app.get('/users', (request, response) =>{ // Busca e retorna a lista de usuários
    return response.json(usersList)
})

app.post('/users', (request, response) =>{ // Cria novos usuários
      
    const { name, age } = request.body

    const user = { id: uuid.v4(), name, age} 

    usersList.push(user)

    return response.status(201).json(user)

})

app.listen(3000, () =>{
    console.log("Server started on port 3000")
})