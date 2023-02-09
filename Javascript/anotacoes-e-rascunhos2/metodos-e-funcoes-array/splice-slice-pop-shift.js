/* 
    Arrays - Métodos

        Splice : Remove e adiciona itens em um array (Quando remove, diferente do delete, exclui a posição e o valor)
        Slice : "Fatia" uma determinada parte do array (Cria um novo array)
        Pop : Remove o último item do array
        Shift : Remove o primeiro item do array

*/

let students = ["aluno1", "aluno3", "aluno4", "aluno 5"]


// Splice
students.splice(1, 0, "aluno2") // Ordem do (): Posição do array - Itens que serão excluidos - Item que será adicionado
console.log(students)

// Slice (Necessário criar uma nova variavel para receber o valor da nova Array)
let newStudents = students.slice(1, 3) // Ordem do (): Posição do array - Até qual posição irá fatiar (Não pega a ultima)
console.log(newStudents)

// Pop
students.pop()
console.log(students)

// Shift
students.shift()
console.log(students)
