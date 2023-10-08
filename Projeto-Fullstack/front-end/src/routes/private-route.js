import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { Header } from '../components'
import paths from '../constants/path'

function PrivateRoute({ component, isAdmin, ...rest }) {
    const user = localStorage.getItem('codeburger:userData')

    if (!user) { // Caso os dados locais não forem encontrados, o usuário será redirecionado
        return <Redirect to={paths.Login} />
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