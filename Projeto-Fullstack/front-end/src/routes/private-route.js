import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { Header } from '../components'

function PrivateRoute({ component, isAdmin, ...rest }) {
    const user = localStorage.getItem('codeburger:userData')

    if (!user) { // Caso os dados locais não forem encontrados, o usuário será redirecionado
        return <Redirect to="/login" />
    }

    if (isAdmin && !JSON.parse(user).admin) { //.parse para voltar no formato de objeto (no local storage ele fica como string)
        return <Redirect to="/" />
    }

    return (
        <>
            {!isAdmin && <Header />}
            <Route component={component} {...rest} />
        </>
    )
}

export default PrivateRoute