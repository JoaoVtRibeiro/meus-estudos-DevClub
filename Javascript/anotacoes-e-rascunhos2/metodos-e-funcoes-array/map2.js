/* 
    Map - Parte 2

    No map, também é possivel fazer com que sua função seja montada fora do "()", 
    inserindo apenas o nome da função.

    Além disso também é possivel concatenar maps com funções diferentes, sem limite de concatenações

*/

// Exemplo, com números
const numbers = [1,2,3,4]

const double = number => number * 2
const sum = number => number + 10

const newNumbers = numbers.map(double).map(sum)

console.log(newNumbers)

// Exemplo, com template string

const toReais = number => `R$ ${number.toFixed(2)}`

const reais = newNumbers.map(toReais)

console.log(reais)



