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