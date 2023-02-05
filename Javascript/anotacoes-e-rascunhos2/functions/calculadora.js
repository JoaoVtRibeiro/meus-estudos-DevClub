/* 
    Calculadora

    Uma pequena demonstração de como utilizar o comando function
    fazendo por exemplo, uma "calculadora".
*/

const calculator = (number1, number2, operation) => {

    let result

    switch (operation) {
        case "+":
            result = number1 + number2
            break
        case "-":
            result = number1 - number2
            break
        case "*":
            result = number1 * number2
            break
        case "/":
            result = number1 / number2
            break
        default:
            console.log(`Erro no calculo. Por favor, insira dois números e uma operação para realizar o calculo corretamente`)
            break
    }

    return result
}

console.log(calculator(2,4,"/"))