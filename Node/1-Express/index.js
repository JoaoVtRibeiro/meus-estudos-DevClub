const express = require('express') // Importação do express para o arquivo js

const app = express() // Para não precisar escrever express + () sempre, é pratico colocar em uma variavel

app.get('/users', (request, response) => { // Estrutura para criar uma rota
    return response.send('Hello Node') // .send envia uma mensagem
})

app.listen(3000) // Define a porta que a aplicação irá rodar, para conseguir acessar


/* 
    - Acessar no navegador: localhost:número da porta/nome da rota

    - Deixar o server / aplicação rodando : node nomedoarquivo.js

    - Fazer o server / aplicação parar de rodar : ctrl + c

    Obs: Sempre que fazer uma alteração você deve parar o servidor e rodar novamente
*/


