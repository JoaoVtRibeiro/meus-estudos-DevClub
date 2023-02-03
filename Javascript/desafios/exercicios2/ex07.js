/* 
    7. Faça um programa onde leia um número e diga se ele é: 
    - ímpar, 
    - par, 
    - é um número primo e impar, 
    - é par e divisível por 5.
*/

const number = 37

if (number % 2 === 0) {
    // Par 
    if (number % 5 === 0) {
        console.log(`O número ${number} é par e divisível por 5.`)
    } else {
        console.log(`O número ${number} é par, mas não é divisível por 5.`)
    }
} else {
    // Ímpar
    for (i = 2; number > i; i++) {
        if (number % i === 0) {
            console.log(`O número ${number} é ímpar, mas não é primo.`)
            break
        } else if (number === i + 1){
            console.log(`O número ${number} é ímpar e primo.`)           
        }
    }
}