/* 
    3. Escreva um programa onde, você chame uma função, e ela diga a hora exata!
*/

let date = new Date();

console.log(`Agora são exatamente ${date.getHours()} horas e ${date.getMinutes()} minutos`)

/* 
    A outro comando que é possivel saber a hora, minuto e segundo a partir do UTC

    new Date().toLocateTimeString('pt-BR')

    Caso utilizar o .getMonth lembre-se de colocar um "+1" já que a contagem começa do zero.
*/