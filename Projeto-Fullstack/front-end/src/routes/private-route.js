import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { Header } from '../components'

function PrivateRoute({ component, ...rest }) {
    const user = localStorage.getItem('codeburger:userData')

    if (!user) { // Caso os dados locais não forem encontrados, o usuário será redirecionado
        return <Redirect to="/login" />
    }

    return (
        <>
            <Header />
            <Route component={component} {...rest} />
        </>
    )
}

export default PrivateRoute