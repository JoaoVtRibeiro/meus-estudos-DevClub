/* 
    FILTER

        - Cria um novo array, a partir do array percorrido (array original)
        - Cria um novo array APENAS com os elementos filtrados
        - Aceita 3 parâmetros
            - item do array
            - index
            - array completo

            return true -> Item atual passa pro nnovo array
            return false - > Item atual NÂO passa pro novo array
*/

const list = [20, 3, 234, 12, 17, 541, 6, 87, 275, 1000]

const filteredList = list.filter( number => number > 100) // Array apenas com números maiores do que 100

console.log(filteredList)

const pairNumbers = list.filter( number => number % 2 === 0)

console.log(pairNumbers)