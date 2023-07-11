// Lembrar de olhar a documentação, caso aja duvida na estrutura
import React, { createContext, useContext } from 'react'

const UserContext = createContext({})

export const UserProvider = ({ children }) => { // Provedor, aquele que tem a responsabilidade de ficar com os dados
    const user = { name: 'Rodolfo', age: 18 }
    const outroUser = { name: 'João', age: 25 }

    return (
        <UserContext.Provider value={{ user, outroUser }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => { // Responsavel por disponibilizar os dados para o resto da aplicação
    const context = useContext(UserContext)

    if(!context) { //Erro caso o valor chegue nulo
        throw new Error('useUser must be used with UserContext')
    }

    return context
}

