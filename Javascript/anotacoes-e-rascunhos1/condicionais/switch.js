/* 
    Condicionais - Switch Case

    Parecido com "if", executa um determinado trecho de código CASO o valor 
    determinado estiver entre as opções de valores no "case"

    Obs: Também é possivel adicionar um comando "default" no "switch", 
    que executa um trecho de código caso o valor não estiver entre nenhuma dos "case"
*/

const option = "d"

switch (option) {
    case "a":
        console.log("Opção A")
        break /* Finaliza o trecho de código do "case" */
    case "b":
        console.log("Opção B")
        break
    case "c":
        console.log("Opção C")
        break
    default:
        console.log("Opção não encontrada")
        break
}
