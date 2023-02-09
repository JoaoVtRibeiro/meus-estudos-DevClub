/* 
    For Each

    Uma estrutura de repetição utilizada para percorrer arrays

    Aceita três parâmetros
        1. valor da posição = Recebe o valor de cada posição do array
        2. index = mostra a posição do item do array
        3. array = mostra o array completo (as vezes mostradas vão ser iguais ao número de posições que houver no array)

*/

const students = [{name:"aluno1", age: 10}, {name:"aluno2", age: 11}, {name:"aluno3", age: 11} ,{name:"aluno4", age: 9}]

// Exemplo mostrando o resultado de cada parâmetro
/* students.forEach((student, posicao, array) => {
    console.log(student)
    console.log(posicao)
    console.log(array)
}) */


// Exemplo prático, fazendo a média de idade

let sumAges = 0

students.forEach((student) => {
    sumAges += student.age
})

let averageAges = sumAges / students.length

console.log(averageAges.toFixed(0)) //.toFixed limita o número de casas decimais permitidas

// Exemplo prático, escrevendo uma mensagem

students.forEach(function (students, index) { // forEach sem arrow function
    console.log(`O nome do aluno é ${students.name}, ele tem ${students.age} e está na posição ${index}`)
})