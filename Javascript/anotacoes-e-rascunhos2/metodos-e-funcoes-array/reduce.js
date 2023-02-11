/* 
    Reduce

    - Retorna um valor (pode ser um novo array, objeto, string, number, etc)
    - Aceita 4 parâmetros
        - acumulador
        - valor atual
        - index
        - array completo

    Sua estrutura é formada por array.reduce + (função) + valor inicial do acumulador

    Obs: Colocando no parâmetro "valor atual" o nome do atributo entre chaves, 
    será enviado o valor do atributo sem a necessecidade do "parametro.atributo"
*/

// Exemplo com array de números

const list = [1,2,3,4]

const sum = list.reduce((acc, current) => {
    return acc + current
}, 0) // Valor inicial do acumulador

console.log(sum) // Aqui, Reduce reduziu o itens em apenas um valor (Somando todos) 

