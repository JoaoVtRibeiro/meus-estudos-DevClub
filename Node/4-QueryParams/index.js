/* 
    Query params

    São usados para passar informações entre páginas ou rotas de um aplicativo web.
    Os query params são adicionados a URL após o caractere "?" e são compostos 
    por pares "chave=valor" separados pelo caractere "&". Por exemplo:

    meusite.com/users?nome=rodolfo&age=28  - FILTROS
*/

const express = require('express')

const app = express()

/* Formato mais extenso:

app.get('/users', (request, response) =>{ // .tipo de rota('nomedarota', (request, response)=>{})
    const name = request.query.name
    const age = request.query.age

    return response.json({name: name, age: age})
}) 

*/

// Forma abreviada (economizando código)
app.get('/users', (request, response) =>{
    const {name, age} = request.query // os nomes das variaveis sendo os mesmos dos parâmetros do query, automaticamente o valor da variavel se torna a do parâmetro

    return response.json({name, age}) // o mesmo ocorre aqui, se o nome do parâmetro e da variavel forem os mesmos
})

app.listen(3000, () => {
    console.log("Server starded on port 3000")
})