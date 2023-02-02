/* 
    Estrutura de repetição - For in

    For in repete um trecho de código a partir do número de posições em um objeto
*/

let object = {name: "fulano", age: 22}

// Exemplo da estrutura

for(let property in object){
    console.log(property) /* Aqui irá mostrar propriedade */
    console.log(object[property]) /* Aqui irá mostrar o valor da propriedade */
}

// Exemplo de como replicar o objeto

console.log(`\n Replica do objeto: \n`)

for(let property in object){
    console.log(`${property} : ${object[property]}`)
}
