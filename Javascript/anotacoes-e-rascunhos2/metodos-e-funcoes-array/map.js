/* 
    Map

    - Cria um novo array, a partir do array percorrido (array original)
    - Cria um novo array, com a mesma quantidade de itens do array original
    - Aceita 3 parâmetros
        - item do array
        - index
        - array completo
*/

// Exemplo com array de números
const numbers = [1, 2, 3, 4]

const mapNumbers = numbers.map((numbers) => {
    return numbers * 2  
})

console.log(numbers) // Array original
console.log(mapNumbers) // Array criado pelo map

// Exemplo com array de objetos

const students = [{name:"aluno1", age: 25},{name:"aluno2", age: 23},{name:"aluno3", age: 26},{name:"aluno4", age: 24},{name:"aluno5", age: 23}]

const mapStudents = students.map((student) => {
    const mapStudentsNewValues = {
        name: student.name + " da Silva",
        age: student.age - 5
    }
    return mapStudentsNewValues
})

console.log(mapStudents)


