import React from 'react'
import { Switch, Route, BrowserRouter as Router } from "react-router-dom"

import Login from '../containers/Login'
import Register from '../containers/Register'

function AppRoutes() {
    return (
        <Router>
            <Switch>
                <Route component={Login} path="/login" />
                <Route component={Register} path="/cadastro" />
            </Switch>
        </Router >
    )
}

export default AppRoutes