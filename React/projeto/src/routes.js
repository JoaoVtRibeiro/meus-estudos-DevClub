// Importação do React Route e seus componentes
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Importação das páginas
import Home from "./pages/Home"; // após o nome da pasta, não é necessario escrever o nome do arquivo caso for index.js
import Users from "./pages/Users";

function Routes() {
    return (
        <Router> {/* Permite definir rotas */}
            <Switch> {/* Quando a rota for encontrada, outras não vão mais ser procuradas (performace) */}
                <Route exact path="/" component={Home} /> {/* Criação da rota, exact path="/caminho" component{Página} */}
                <Route exact path="/users" component={Users} />
            </Switch>
        </Router>
    )
}

export default Routes