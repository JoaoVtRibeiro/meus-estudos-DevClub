/* 
    2. Escreva um programa onde, você chame uma função enviando um número 
    (aceitar somente valores entre 1 e 10) e escrever a tabuada de 1 a 10 do valor lido.
*/

const multiplicationTable = (number) => {

    let result

    if (number >= 1 && number <= 10) {
        for (let i = 1; i <= 10; i++) {
            console.log(`${number} x ${i} = ${result = number * i}`)
        }
    } else {
        console.log(`Valor inválido, por favor escolha um número entre 1 e 10`)
    }
}

multiplicationTable(5)