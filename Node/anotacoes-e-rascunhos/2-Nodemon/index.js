/* 
    Nodemon

    Uma ferramente que, ao ligar o servidor, faz com que ele se 
    atualize automaticamente a cada alteração, sem a necessidade de 
    reiniciar a cada modificação. Em resumo, deixa o processo de desenvolvimento 
    mais prático

    Para instalar o nodemon : npm i nodemon -D

    O "-D" especifica que a ferramenta/framework/biblioteca será utilizada apenas para desenvolvimento

    No arquivo package.json existe a area dos "scripts" que 
    servem como atalhos para executar um determinado comando. 
    Lá adicione um script que execute o nodemon 
    
    Depois disso, para executar escreva o comando no prompt de comandos: 

    npm run nome-do-script

    Para parar a execução: ctrl + c

*/

const express = require('express') 

const app = express() 

app.get('/users', (request, response) => { 
    return response.send('Test nodemon')
})

app.listen(3000, () => { // .listen aceita um segundo parâmetro(opcional), como um função por exemplo
    console.log('Server started on port 3000')
})