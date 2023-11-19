/* 
    Utility Types

        Os utility types são tipos pré-definidos no TypeScript que fornecem funcionalidades
        extras para manipulação de tipos. Eles permitem que você transforme, combine e manipule 
        tipos de forma mais fácil e eficiente. Alguns exemplos de utility types incluem:

        - Partial
        - Omit
        - Pick
*/

type User = {
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

type PartialUser = Partial<User>

type NewUser = Omit<User, 'id' | 'username'>

type SearchUser = Pick<User, 'username'>

const searchUser: SearchUser = {
    username: 'agustinhopneto'
}