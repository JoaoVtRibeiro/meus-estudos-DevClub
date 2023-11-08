/* 
    A tipagem também é possivel em parâmetros e no retorno de funções

    obs: o typescript também irá colocar como erro caso for especificado o tipo do return mas ele não for escrito
*/

function sum(a: number, b: number): number{ // caso não houvesse o return ): number estaria com o erro
    return a + b
}


sum(4,3)