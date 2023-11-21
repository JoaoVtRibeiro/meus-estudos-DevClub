/* 
    Utility Types

        Os utility types são tipos pré-definidos no TypeScript que fornecem funcionalidades
        extras para manipulação de tipos. Eles permitem que você transforme, combine e manipule 
        tipos de forma mais fácil e eficiente. Alguns exemplos de utility types incluem:

        - Omit
    
            Permite criar um novo tipo omitindo uma ou mais propriedades de um tipo existente. 
            Basicamente, você pode usar o Omit para criar um tipo que tenha todas as 
            propriedades do tipo original, exceto aquelas que você deseja omitir. 
            
            É útil quando você precisa criar um novo tipo com base em um tipo existente, 
            mas não quer incluir algumas propriedades específicas. 
*/

type User2 = {
    id: number;
    username: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

type NewUser = Omit<User2, 'id' | 'username'> // Omissão do id e username

const user: NewUser = {
    password: 'typescript123',
    createdAt: new Date(),
    updatedAt: new Date()
}



