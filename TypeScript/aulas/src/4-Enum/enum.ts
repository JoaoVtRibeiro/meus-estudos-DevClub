/* 
    Enum

        É um "facilitador", que permite organizar e também evitar
        erros de escrita de valores de propriedades, criando um conjunto de opções

        Por exemplo: imaginado que você tem uma lista de cores,
        vermelho, azul, verde. Em vez de usar as palavras diretamente, 
        você pode criar um enum chamado "Cores" e colocar essas opções lá dentro. 
        Assim, quando você quiser usar uma cor e ter certeza que é exatamente esse valor que será inserido/escolhido
        você pode simplesmente escrever o enum "Cores"
*/

const gender = { // Exemplo de um objeto com esse mesmo proposito no javascript
    male: 'male',
    female: 'female',
    other: 'other'
}

enum Gender { // Exemplo do enum
    MALE = 'Male',
    FEMALE = 'Female',
    OTHER = 'Other'
}

Gender.FEMALE


// Exclusividade do enum
type Person = {
    name: string;
    age: number;
    gender: Gender; // Filtrar os valores possiveis de uma propriedade
}

const person: Person = {
    name: 'Joao',
    age: 12,
    gender: Gender.MALE
}
