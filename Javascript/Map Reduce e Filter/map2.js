// 1. Faça um map onde os vips estejão com bracelete preto e os não vips com bracelete verde

const list = [
    { name: 'Rodolfo', vip: true },
    { name: 'Maria', vip: false },
    { name: 'João', vip: true },
    { name: 'Bruno', vip: true },
    { name: 'Carla', vip: false },
    { name: 'Ana', vip: true },
    { name: 'Julio', vip: false }
]

// Resposta
const braceletSeparation = list.map(client => {
    return { name: client.name, braceletColor: client.vip ? 'Preto' : 'Verde' }
})

console.log(braceletSeparation)


// 2. Faça um map onde verifique se o aluno foi ou não reprovado (Nota média: 5)

const students = [
    { name: 'Rodolfo', testGrade: 7 },
    { name: 'Maria', testGrade: 5 },
    { name: 'João', testGrade: 8 },
    { name: 'Bruno', testGrade: 9 },
    { name: 'Carla', testGrade: 3 },
    { name: 'Ana', testGrade: 2 },
    { name: 'Julio', testGrade: 10 }
]

const assessmentStudents = students.map( student => {
    return { name: student.name, approved: student.testGrade >= 5 ? 'Aprovado' : 'Reprovado'}
}) 

console.log(assessmentStudents)