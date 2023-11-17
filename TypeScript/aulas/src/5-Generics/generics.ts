/* 
    Generics

        São um como um "parâmetro de tipo generico" que é utilizado para receber qualquer tipo de dado
        Eles são muitos uteis se a função for receber vários 
        tipos de dados diferentes e não ter que se estender na tipagem dos parâmetros

        Para definir um, basta colocar "<>" ao lado do nome da função com uma letra (Geralmente é utilizado o "T")
        Obs: Também é possivel passar mais de um -> <T, M, O>

        Depois quando chamar a função, informar o tipo do dado na chamada 

 */

// Exemplo da função
function getFirstElement<T>(data: T[]): T | null { // Para tipar um array, coloque '[]' após inserir o tipo de dado
    if (!data.length) {
        return null
    }

    const [firstElement] = data

    return firstElement
}

// Arrays
const stringArray: string[] = ['Lucas', 'Fernando', 'Gabriel', 'Maria']
const numberArray: number[] = [1, 2, 3, 4, 5, 6]


// Exemplo de chamada das funções
console.log(getFirstElement<string>(stringArray))
console.log(getFirstElement<number>(numberArray))
