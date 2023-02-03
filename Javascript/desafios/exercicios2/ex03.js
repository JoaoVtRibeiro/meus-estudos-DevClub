/*  
    3. Faça um programa que gere um número aleatório entre 1 e 10, esse número é o número 'ganhador'. 
    Então ele também irá gerar um número aleatório entre 1 e 10, e verifica se a pessoa ganhou ou não. 
    Em caso de ter ganhado, mostra o prêmio, se não ganhou, mostra outra mensagem.

*/

let winningNumber = Math.floor(Math.random() * 10 + 1)

let betNumber = Math.floor(Math.random() * 10 + 1)

let result = betNumber === winningNumber ? "Os números são iguais! Ganhou o prêmio!" : "Os números não são iguais, não foi dessa vez."

console.log(`Número ganhador: ${winningNumber}
Número apostado: ${betNumber}
\n${result}`)