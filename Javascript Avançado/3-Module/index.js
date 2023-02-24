/* 
    Modules

    Os arquivos javascript podem ser organizados em arquivos separados para encapsular o código 
    e reutiliza-lo. Esses arquivos separados com trechos de código retilizaveis são chamados de "módulos".
    
    Em um geral, eles permitem que o código seja dividido em partes menores 
    e mais gerenciáveis, facilitando o manejo e manutenção da aplicação.

    Os itens de exportação e importação podem ser variaveis ou funções por exemplo.

    Para exportar um ou mais itens do modulo:

        module.exports = item   // Apenas um item

        module.exports = {item1, item2, item3}  // Dois ou mais itens

    Para importar itens de outro modulo:

        Apenas um item:
        - const nomeQualquer = require('./localização do modulo que contém a exportação') 

        Dois ou mais itens:
        - const nomeDoModulo = require('./localização do modulo que contém a exportação') // Nome da variavel sendo o nome do modulo

        - const {nomeDoItem1, nomeDoItem2} = require('./localização do modulo que contém a exportação') // Com a desestruturação

        Obs: Caso seja dois ou mais, o nome entre as {} deve ser exatamente o mesmo do item exportado

    Utilizar o item exportado:

        Apenas um item:
        - Utilize-o com o mesmo nome da variavel que contém o require do item

        Dois ou mais itens, com o nome da variavel que contém o require seja o nome do modulo:
        - nomedomódulo.nomedoitem, nesse caso o item vira como se fosse um "atributo" do módulo

        Dois ou mais itens, com a desestruturação:
        - Utilize-o com o mesmo nome do item importado
*/


// Exportação de um item
const ten = require('./number')

console.log(ten)


// Exportação de Dois ou mais itens, com o nome da variavel sendo o nome do modulo
const sumAndSubtraction = require('./sumSubtraction')

console.log(sumAndSubtraction.sum(3,4))
console.log(sumAndSubtraction.subtraction(6,4))

// Exportação de Dois ou mais itens, com a desestruturação
const {multiplication, division} = require('./multiDivision')

console.log(multiplication(5,5))
console.log(division(15,5))
