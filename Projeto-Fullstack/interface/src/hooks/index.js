import PropTypes from 'prop-types'
import React from 'react'

import { CartProvider } from './CartContext'
import { UserProvider } from './UserContext'

// A ordem dos Providers não importa, funciona da mesma maneira
const AppProvider = ({ children }) => (
    <UserProvider>
        <CartProvider>{children}</CartProvider>
    </UserProvider>
)

AppProvider.propTypes = {
    children: PropTypes.node
}

export default AppProvider
