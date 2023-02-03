/* 
    5b. Faça um programa onde os jurados vão dar a explicação para cada nota dada. 
    São permitidas notas de 0 a 10. Cada nota deve conter uma mensagem diferente.
*/

const note = Math.floor(Math.random() * 11) // Por conta do Math.floor, o valor nunca será 11. Será de 0 a 10.

switch (note) {
    case 0:
        console.log(`Nota ${note}, Péssimo!`)
        break
    case 1:
        console.log(`Nota ${note}, Muito ruim!`)
        break
    case 2:
        console.log(`Nota ${note}, Ruim!`)
        break
    case 3:
        console.log(`Nota ${note}, Decepcionante...`)
        break
    case 4:
        console.log(`Nota ${note}, Poderia ser melhor.`)
        break
    case 5:
        console.log(`Nota ${note}, Ok.`)
        break
    case 6:
        console.log(`Nota ${note}, Bom.`)
        break
    case 7:
        console.log(`Nota ${note}, Muito bom!`)
        break
    case 8:
        console.log(`Nota ${note}, Ótimo!`)
        break
    case 9:
        console.log(`Nota ${note}, Excelente!`)
        break
    case 10:
        console.log(`Nota ${note}, Perfeito!`)
        break
    default:
        console.log(`Nota não aceita, a nota deve ser um número entre 0 e 10`)
}