import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom' // Router dom v5

import paths from '../constants/paths'
import { Home, Login, Products, Register, Cart, Admin } from '../containers'
import PrivateRoute from './private-route' // Verifica se o usuário está logado (Caso não será redirecionado para tela de login)

function Routes() {
    return (
        <Router>
            <Switch>
                <Route component={Login} path={paths.Login} />
                <Route component={Register} path={paths.Register} />
                <PrivateRoute exact component={Home} path={paths.Home} />
                <PrivateRoute component={Products} path={paths.Products} />
                <PrivateRoute component={Cart} path={paths.Cart} />
                <PrivateRoute
                    component={Admin}
                    path={paths.Order}
                    isAdmin
                />{' '}
                {/* isAdmin sendo passado como true (desse jeito da no mesmo que isAdmin={true}) */}
                <PrivateRoute
                    component={Admin}
                    path={paths.ProductsList}
                    isAdmin
                />
                <PrivateRoute
                    component={Admin}
                    path={paths.NewProduct}
                    isAdmin
                />
                <PrivateRoute
                    component={Admin}
                    path={paths.EditProduct}
                    isAdmin
                />
                <PrivateRoute
                    component={Admin}
                    path={paths.Categories}
                    isAdmin
                />
                <PrivateRoute
                    component={Admin}
                    path={paths.NewCategory}
                    isAdmin
                />
                <PrivateRoute
                    component={Admin}
                    path={paths.EditCategory}
                    isAdmin
                />
            </Switch>
        </Router>
    )
}

export default Routes
