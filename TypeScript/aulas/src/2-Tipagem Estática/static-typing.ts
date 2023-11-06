/* 
    Tipagem Estática
 
        Permite especificar os tipos de dados das variáveis ​​e parâmetros de função durante a fase de compilação. 
        Isso significa que o TypeScript verifica se os tipos estão sendo usados corretamente e detecta erros de tipo 
        antes mesmo de executar o código. Dessa forma, a tipagem estática ajuda a evitar erros comuns e melhora a segurança
        e a confiabilidade do código.

        Em resumo, a tipagem estática torna o tipo de uma variavel de fato "estática", ou seja, sem possibilidade de alteração
*/

//Exemplo
let age: number = 22
let myName: string = 'joao'

age = 23 // <- Alteração sem erro
//age = '' <- Alteração com erro, o typescript irá avisar

myName = 'vitor' // <- Alteração sem erro
//myName = 2 <- Alteração com erro, o typescript irá avisar



