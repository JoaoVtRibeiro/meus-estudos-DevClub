/* 
    Object

    Variaveis capazes de armanezar mais de um valor ao mesmo tempo (e da mais de um tipo)

*/

let object = {
    name: "Fulano",
    age: 21,
    address: { /* É possivel colocar uma variavel dentro de outras variaveis */
        street: "Rua tal",
        country: "Brasil"
    }
}

console.log(object) /* Ao colocar o nome do objeto, todos os seus valores serão mostrados */

console.log(object.name) /* Com um ponto após o nome do objeto, é possivel acessar um valor em especifico */

console.log(object.address.country) /* O mesmo acontece com valores de objetos dentro de outro objeto */

console.log(object.nonexistent) /* Caso ele não encontre ou caso o nome do valor não exista o resultado será "undefined" */