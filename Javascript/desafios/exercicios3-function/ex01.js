/* 
    1. Escreva um programa onde, você chame uma função enviando um número, 
    a função deve imprime na tela os número de 1 até o número que você enviou
*/

// Com while

const printNumbers = (number) => {
    let i = 1

    while(number >= i){
        console.log(i)
        i++
    }
}

printNumbers(3)

// Com for

/* const printNumbersFor = (number) => {
    for(let i = 1; number >= i; i++){
        console.log(i)
    }
}

printNumbersFor(5) */