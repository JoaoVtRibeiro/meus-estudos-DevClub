/* 
    Filter

    Cria um novo array, filtrando apenas os valores que são true

    - Cria um novo array, a partir do array percorrido (array original)
    - Cria um novo array, APENAS com os elementos filtrados
    - Aceita 3 parâmetros
        - item do array
        - index
        - array completo
*/

// Exemplo 1, filtrando apenas clientes vips

const list = [
    {name:"Rodolfo", vip: true},
    {name:"Maria", vip: false},
    {name:"João", vip: true},
    {name:"Bruno", vip: true},
    {name:"Carla", vip: false},
    {name:"Ana", vip: true},
    {name:"Julia", vip: false}
]

const justVips = list.filter(client => client.vip) // Está retornando apenas os "vips" que contém o valor true

console.log(justVips)

// Exemplo 2, filtrando apenas estudantes aprovados

const students = [
    {name: "Rodolfo", testGrade: 7},
    {name: "Maria", testGrade: 5},
    {name: "João", testGrade: 8},
    {name: "Bruno", testGrade: 9},
    {name: "Carla", testGrade: 3},
    {name: "Ana", testGrade: 2},
    {name: "Julio", testGrade: 10}
]

const approvedStudents = students.filter(student => student.testGrade >= 7)

console.log(approvedStudents)



