/* 
    Parâmetros Opcionais

        Assim como com o retorno, também é possivel colocar 
        mais de uma opção de tipo para os parâmetros
*/

// Exemplo
function stringOrNumberSize(value: string | number): number{
    if(typeof value === 'string') { // typeof: indica o tipo de variavel
        return value.length
    }

    return value
}


stringOrNumberSize('cinco')