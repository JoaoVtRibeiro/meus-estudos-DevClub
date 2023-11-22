/* 
    Utility Types

        Os utility types são tipos pré-definidos no TypeScript que fornecem funcionalidades
        extras para manipulação de tipos. Eles permitem que você transforme, combine e manipule 
        tipos de forma mais fácil e eficiente. Alguns exemplos de utility types incluem:

        - Pick
            Permite selecionar propriedades específicas de um tipo e
            criar um novo tipo somente com essas propriedades selecionadas. 
            É como se você estivesse "escolhendo" quais propriedades quer utilizar em um novo tipo

*/

type User3 = {
    id: number;
    username: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}


type SearchUser = Pick<User3, 'username'> // Busca apenas pelo nome de usuário

const searchUser: SearchUser = {
    username: 'agustinhopneto'
}

