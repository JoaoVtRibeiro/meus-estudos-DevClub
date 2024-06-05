/* 
    Reduce

        - Retorna um valor (pode ser um novo array, um objeto, string, number, etc)
        - Aceita 4 parâmetros
            - acumulador (obrigatório)
            - valor atual (obrigatório)
            - index
            - array completo
*/

const list = [1, 2, 3, 4, 5, 6, 7]

const sum = list.reduce((accumulator, currentValue) => {
    console.log(accumulator + 'acc')
    console.log(currentValue + 'valorAtual')
    return accumulator + currentValue
}, 0) // 0 é qual valor inicial do acumulador 

