// Importação do React Route e seus componentes
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importação das páginas
import Home from "./pages/Home"; // após o nome da pasta, não é necessario escrever o nome do arquivo caso for index.js
import Users from "./pages/Users";

function AppRoutes() {
    return (
        <Router> {/* Permite definir rotas */}
            <Routes> {/* Quando a rota for encontrada, outras não vão mais ser procuradas (performace) */}
                <Route path="/" element={<Home />} /> {/* Criação da rota, path="/caminho" element={<Página />}*/}
                <Route path="/users" element={<Users />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes