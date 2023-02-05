/* 
    Arrow Function

    Uma outra forma de estrutura de uma function, a arrow possibilita  economizar mais código,
    além de já retornar automaticamente (não precisa do return) caso estiver apenas em uma linha

*/

// Arrow em uma linha
const arrow_a_line = (number1, number2) => number1 + number2 

const result = arrow_a_line(3,4)

console.log(result)

// Arrow sem parâmetros

const arrow_without_parameters = () => {
    console.log("Sem parâmetros")
}

// Arrow com apenas um parâmetro

const arrow_a_parameter = number1 => {
    number1 = 1
    console.log("Um parâmetro")
}
