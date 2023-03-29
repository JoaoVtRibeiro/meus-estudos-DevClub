// Importação do React Route e seus componentes
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Importação das páginas
import Home from "./pages/Home"; // após o nome da pasta, não é necessario escrever o nome do arquivo caso for index.js
import Users from "./pages/Users";

function Routes() {
    return (
        <Router> {/* Permite definir rotas */}
            <Switch> {/* Quando a rota for encontra ele para de procurar outras com o mesmo nome */}
                <Route exact path="/" component={Home} /> {/* cria a rota */}
                <Route exact path="/usuarios" component={Users} />
            </Switch>
        </Router>
    )
}