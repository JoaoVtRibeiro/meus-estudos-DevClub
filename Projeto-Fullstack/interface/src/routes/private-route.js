import PropTypes from 'prop-types'
import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { Header } from '../components'

function PrivateRoute({ component, isAdmin, ...rest }) {
    const user = localStorage.getItem('codeburger: userData')

    // .parse para voltar no formato de objeto (no local storage ele fica como string)
    if (isAdmin && !JSON.parse(user).admin) {
        return <Redirect to="/" />
    }

    // Caso os dados locais não forem encontrados, o usuário será redirecionado
    if (!user) {
        return <Redirect to="/login" />
    } else {
        return (
            <>
                {!isAdmin && <Header />}
                <Route {...rest} component={component} />
            </>
        )
    }
}

export default PrivateRoute

PrivateRoute.propTypes = {
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
    isAdmin: PropTypes.bool
}
