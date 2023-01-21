/* 
    Array

    Capaz de armazenas muitos valores em apenas uma variavel, geralmente utilizado para listas

    Obs: diferente dos objetos, array não guardam variaveis apenas valores, 
    mas é possivel guardar um objeto dentro de uma array

*/

const numbersArray = [230, 45, 20, "texto", true]


console.log(numbersArray) /* Mostra todos os valores da array */

console.log(numbersArray[4]) /* É possivel mostrar um valor em especifico (a contagem começa do 0) */

const objectsArray = [{ /* Também é possivel listar objetos */
    name: "pedrinho",
    age: 22,
    adress:{
        street: "rua tal, 1"
    }
}, {
    name: "maria",
    age: 30,
    adress:{
        street: "rua tal, 2"
    }
}, {
    name: "fulano",
    age: 41,
    adress:{
        street: "rua tal, 3"
    }
}]

console.log(objectsArray[1].adress) /* Para acessar um valor de um objeto e uma posição do array */

