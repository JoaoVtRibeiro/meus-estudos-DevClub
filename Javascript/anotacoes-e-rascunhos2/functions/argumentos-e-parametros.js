/* 
    Argumentos e parâmetros / Arguments and Parameters

    Em uma function, é possivel adicionar alguns parâmetros dentro dos parenteses de quando está sendo criada.
    Parâmetros são como variaveis que só podem ser utilizadas na function que pertencem

    Já os argumentos são os valores dessas variaveis, 
    são adicionados dentro dos parenteses de quando a função está sendo chamada.

    Obs: Não há limite de parâmetros e argumentos possíveis. 
*/

function sum (number1, number2){
    console.log(number1 + number2)
}

sum(2,3)

// Também é possivel utilizar uma variavel como argumento para um parâmetro.

const five = 5

sum(five, 5)