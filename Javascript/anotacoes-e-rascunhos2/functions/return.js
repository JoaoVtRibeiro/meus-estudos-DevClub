/* 
    Return

    Como o próprio nome já indica, é um comando que retorna 
    um valor em especifico quando uma função é chamada

    Uma função sem um Return é chamada de Void (Vazia)

*/

// Sem o return / void
function sumVoid(number1, number2){
    console.log(number1 + number2)
}

// Com o return
function sumReturn(number1, number2){
    return number1 + number2
}

let firstNumber = 5
let seccondNumber = 10

console.log(`O retorno da function sem return será ${sumVoid(firstNumber,seccondNumber)}`)

console.log(`O retorno da function com return será ${sumReturn(firstNumber,seccondNumber)}`)

