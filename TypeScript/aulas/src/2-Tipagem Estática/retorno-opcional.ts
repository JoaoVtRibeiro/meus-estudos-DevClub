/* 
    Retorno Opcional

        Adicionando um -> |
        será possivel adiciionar mais de uma opção de tipo no retorno de uma função

        Obs: Esse 'ou' é realmente apenas com uma barra, diferente quando no if por exemplo que seriam duas
*/

//Exemplo
function greeting (fullName: string): string | void { // | permite que além de uma string, o return também pode ser um valor nulo
    if(fullName) {
        return `Olá, ${fullName}`;
    }
}