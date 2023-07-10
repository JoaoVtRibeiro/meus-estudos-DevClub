import React, { createContext, useContext } from 'react'

const UserContext = createContext({})

const UserProvider = ({ children }) => {
    const user = { name: 'Rodolfo', age: 18 }
    const outroUser = { name: 'João', age: 25 }

    return (
        <UserContext.Provider value={{ user, outroUser }}>
            {children}
        </UserContext.Provider>
    )
}