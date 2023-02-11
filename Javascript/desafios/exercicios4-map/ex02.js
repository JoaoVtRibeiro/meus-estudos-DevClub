/* 
    2. Faça um array com "map" que verifique a notas dos estudantes,
    se a nota for maior ou igual a 7, o item do objeto deverá conter finalResult:"approved"
    se não finalResult:"disapproved"
*/

const students = [
    {name: "Rodolfo", testGrade: 7},
    {name: "Maria", testGrade: 5},
    {name: "João", testGrade: 8},
    {name: "Bruno", testGrade: 9},
    {name: "Carla", testGrade: 3},
    {name: "Ana", testGrade: 2},
    {name: "Julio", testGrade: 10}
]

const resultTestGrade = students.map(student => {
    return {
        name: student.name, 
        testGrade: student.testGrade, 
        finalResult: student.testGrade >= 7 ? "approved" : "disapproved"}
})

console.log(resultTestGrade)