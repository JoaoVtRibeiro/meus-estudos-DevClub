/* 
    Body Params

    São informações recuperadas através do corpo (body) da aplicação 
    e podem ser enviadas em diferentes formatos, como JSON, XML, YAML, entre outros."

    Essas informações podem conter dados que são enviados pelo usuário ou
    pelo cliente da aplicação e são usados para executar operações no servidor. 
    É comum especialmente em métodos POST e PUT.

*/

const express = require('express')

const app = express()

app.use(express.json()) // Define que a aplicação terá .json como padrão

app.get('/users', (request, response) =>{
    const {name, age} = request.body

    return response.json({name, age})
})


app.listen(3000, () =>{
    console.log("Server started on port 3000")
})