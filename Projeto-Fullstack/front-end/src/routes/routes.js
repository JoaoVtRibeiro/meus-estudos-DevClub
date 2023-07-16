import React from 'react'
import { Switch, Route, BrowserRouter as Router } from "react-router-dom" // Router dom v5

import Login from '../containers/Login'
import Register from '../containers/Register'
import Home from '../containers/Home'

import PrivateRoute from './private-route' // Verifica se o usúario está logado (Caso não será redirecionado para tela de login)

function AppRoutes() {
    return (
        <Router>
            <Switch>
                <Route component={Login} path="/login" />
                <Route component={Register} path="/cadastro" />
                <PrivateRoute exact component={Home} path="/" />
            </Switch>
        </Router >
    )
}

export default AppRoutes