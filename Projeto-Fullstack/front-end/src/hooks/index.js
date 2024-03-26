import React from 'react'

import PropTypes from 'prop-types'

import { CartProvider } from './CartContext'
import { UserProvider } from './UserContext'

const AppProvider = ({ children }) => (// A ordem dos Providers não importa, funciona da mesma maneira
    <UserProvider>
        <CartProvider>{children}</CartProvider>
    </UserProvider>
)

AppProvider.propTypes = {
    children: PropTypes.node
}

export default AppProvider

