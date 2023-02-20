/* 
    Get => Buscar informações 
    Post => Criar informações
    Put / Patch => Alterar/Atualizar informações
    Delete => Deletar informações

    Obs: Os endereços de rota podem ter o mesmo nome contanto que o verbo http seja diferente
*/

const { response, request } = require('express')
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

    const user = { id: uuid.v4(), name, age} // Criação do novo usuário

    usersList.push(user) // "Empurra" o novo usuário para a lista

    return response.status(201).json(user) // 201 - Confirma a criação (Semântica)

})

app.put('/users/:id', (request, response) =>{ // Atualiza um usuário (Modifica seus valores)
    const {id} = request.params 
    const {name, age} = request.body
    
    const updatedUser = {id, name, age} // Usuario sendo atualizado (id se mantem e recebe o novo nome e idade)

    // findIndex é um dos métodos para percorrer arrays, este procura uma posição que se encaixa na condição dada (caso não encontrar, responde com -1)
    const listPosition = usersList.findIndex(user => user.id === id)

    if(listPosition < 0){ // Caso o findIndex não encontrar, sua resposta vai ser -1
        return response.status(404).json({message: "User not found"}) // 404 - Informa que não foi encontrado (Semântica)
    }

    usersList[listPosition] = updatedUser // Adiciona o usuario atualizado na posição encontrada pelo findIndex

    return response.json(updatedUser)
})


app.listen(3000, () =>{
    console.log("Server started on port 3000")
})