/* 
    Arrays - Métodos

        Push : Adiciona novos itens em um array
        Length : Informa o tamanho do array
        Sort : Organiza o array em ordem alfabética
        Delete : Exclui um item do array
*/

let students = ["João", "Maria", "Rodolfo"]

// Push
students.push("Fulano")
console.log(students)

// Length
console.log(students.length)

// Sort
console.log(students.sort())

// Delete
delete students[0]
console.log(students)

