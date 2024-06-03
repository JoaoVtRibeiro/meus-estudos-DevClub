/* 
    MAP => Mapear um array

        - Cria um novo array, a partir do array percorrido (array original)
        - Cria um novo array, com a mesma quantidade de itends do araay original
        - Aceita 3 parâmetros
            - item do array
            - index (posição do item no array)
            - array completo
*/

const number = [1, 2, 3, 4, 5, 6, 7]

const double = number.map((item, index, arrayOriginal) => {
    console.log(item + ' -> item')
    console.log(index + ' -> index')
    console.log(arrayOriginal + ' -> arrayOriginal')
    return item * 2
})

console.log(double)

// Também é possivel fazer o mesmo em uma linha só, sem a necessidade do return

const double2 = number.map(item => item * 2)