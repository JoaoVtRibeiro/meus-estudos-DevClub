import React from 'react'
import { Switch, Route, BrowserRouter as Router } from "react-router-dom" // Router dom v5

import paths from '../constants/path'
import { Login, Register, Home, Products, Cart, Admin } from '../containers'
import PrivateRoute from './private-route' // Verifica se o usúario está logado (Caso não será redirecionado para tela de login)

function Routes() {
    return (
        <Router>
            <Switch>
                <Route component={Login} path={paths.Login} />
                <Route component={Register} path={paths.Register} />
                <PrivateRoute exact component={Home} path="/" />
                <PrivateRoute component={Products} path={paths.Products} />
                <PrivateRoute component={Cart} path={paths.Cart} />

                <PrivateRoute component={Admin} path={paths.OrderAdm} isAdmin /> {/* isAdmin sendo passado como true (desse jeito da no mesmo que isAdmin={true}) */}
                <PrivateRoute component={Admin} path={paths.ListProductsAdm} isAdmin />
            </Switch>
        </Router >
    )
}

export default Routes