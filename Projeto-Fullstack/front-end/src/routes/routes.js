import React from 'react'
import { Switch, Route, BrowserRouter as Router } from "react-router-dom" // Router dom v5

import { Login, Register, Home, Products } from '../containers'

import PrivateRoute from './private-route' // Verifica se o usúario está logado (Caso não será redirecionado para tela de login)

function Routes() {
    return (
        <Router>
            <Switch>
                <Route component={Login} path="/login" />
                <Route component={Register} path="/cadastro" />
                <PrivateRoute exact component={Home} path="/" />
                <PrivateRoute component={Products} path="/produtos" />
            </Switch>
        </Router >
    )
}

export default Routes