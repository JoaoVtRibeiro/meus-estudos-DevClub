/* 
    Utility Types

        Os utility types são tipos pré-definidos no TypeScript que fornecem funcionalidades
        extras para manipulação de tipos. Eles permitem que você transforme, combine e manipule 
        tipos de forma mais fácil e eficiente. Alguns exemplos de utility types incluem:

        - Partial (Nativo do TypeScript)
            Permite criar um "tipo parcial", que é basicamente 
            um tipo que não precisa necessáriamente de todas as propriedades

        - Omit
        - Pick
*/

// Exemplo Partial

type User1 = {
    id: number;
    username: string;
    password: string;
}

const userPartial1: User1 = { // usuario com todos os dados
    id: 1,
    username: 'agustinhopneto',
    password: 'typescript123',
}

type PartialUser = Partial<User1>


const userPartial2: PartialUser = { // usuario com dados parciais
    id: 2,
    username: 'joao'
}

const userPartial3: PartialUser = {
    username: 'vitor',
    password: '123typescript',
}


/* 

type User1 = {
    id: number;
    username: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

const user: User = {
    id: 1,
    username: 'agustinhopneto',
    password: 'typescript123',
    createdAt: new Date(),
    updatedAt: new Date()
}



type NewUser = Omit<User, 'id' | 'username'>

type SearchUser = Pick<User, 'username'>

const searchUser: SearchUser = {
    username: 'agustinhopneto'
}

 */