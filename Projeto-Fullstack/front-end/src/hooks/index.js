import React from 'react'

import { UserProvider } from './UserContext'
import { CartProvider } from './CartContext'

const AppProvider = ({ children }) => { // A ordem dos Providers não importa, funciona da mesma maneira
    <UserProvider>
        <CartProvider>{children}</CartProvider>
    </UserProvider>
}

export default AppProvider

