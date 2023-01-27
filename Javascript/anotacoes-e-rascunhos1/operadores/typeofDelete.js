/*
    Operadores typeof e delete

    typeof : indica de qual tipo é o dado que uma variavel contém

    delete : exclui um item de um objeto ou array

*/

/* Exemplo typeof */

const text = "text"

const number = 123

const object = {name: "fulano", age: 22}

const array = [0,1,2]

console.log(typeof text)
console.log(typeof number)
console.log(typeof object)

/* Exemplo delete */

delete object.name
delete array[2]

console.log(object)
console.log(array)