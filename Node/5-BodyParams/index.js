/* 
    Route Params

    Utilizados para buscar, deletar ou atualizar algo.
    Route params são valores dinamicos e são definidos 
    após o nome da rota como "/:routeparams" , ex:

    servidor.tipoderota('/nomedarota/:routeparams')

*/

const express = require('express')

const app = express()

app.get('/users/:id', (request, response) =>{
    const {id} = request.params // assim como no query, com params o valor da variavel se torna o mesmo do parâmetro caso os nomes forem os mesmos

    return response.json({id})
})

app.listen(3000, () =>{
    console.log("Server started on port 3000")
})