/* 
     5. Escreva um programa onde, você chame uma função mandando dois argumentos,
        2 números, e a função responde qual número é maior
*/

let numberVerification = (number1, number2) => {

    if (typeof number1 !== "number" || typeof number2 !== "number") {
        console.log("Não foi possivel executar o código, apenas números são permitidos.")
    } else {
        if (number1 > number2) {
            console.log(`O número ${number1} é maior que o número ${number2}`)
        } else if (number2 > number1) {
            console.log(`O número ${number2} é maior que o número ${number1}`)
        } else {
            console.log(`Os números são iguais`)
        }
    }
}

numberVerification(4,2)





