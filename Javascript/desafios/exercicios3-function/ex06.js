/* 
    6. A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e número de filhos. 
    A prefeitura deseja saber: 
    - média do salário da população; 
    - média do número de filhos; 
    - maior salário; 
    - O final da leitura de dados se dará com a entrada de um salário negativo. 
    - Faça isso usando uma função!
*/
const population = [{ salary: 3000, children: 2 }, { salary: 2000, children: 1 },
{ salary: 6000, children: 3 }, { salary: 5000, children: 1 }, { salary: -1000, children: 0 }]


const average = (population) => {

    // Média de salário e filhos

    let salarySum = 0
    let childrenSum = 0
    let counter = 0
   
    for (value of population) {
        if (value.salary > 0) {
            salarySum += value.salary
            childrenSum += value.children
            counter++
        }
    }

    let salaryAverage = salarySum / counter

    let childrenAverage = childrenSum / counter

    // Maior salário

    const salaries = population.map(salary => salary.salary);
    // .map transforma valores de uma propriedade especifica, de uma array de objetos por exemplo, em uma nova array

    const maxSalary = Math.max(...salaries);
    // ... (spread) "espalha" os valores, permitindo verificar varios ao mesmo tempo (Utilizar com arrays principalmente)

    // Resultado

    console.log(`
    A média de salário da população é de R$ ${salaryAverage},
    A média de filhos da população é de ${childrenAverage},
    E o maior salário é de R$ ${maxSalary}.`)

}

average(population)






