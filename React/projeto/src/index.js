import React from "react"; // Importando a biblioteca React
import ReactDOM from "react-dom"; // Modulo/Dependencia react, permite manipular a DOM
import Users from "./pages/Users"; 
import GlobalStyles from './styles/globalStyles' // Estilos globais

ReactDOM.render( /* Método  que renderiza os componentes react na página (atualizando a árvore da DOM) 
Ele recebe dois argumentos:
*/

// 1. Componentes React (Importados no inicio do código)
<> {/* Fragment, usado para cumprir a regra do react (Sempre ter um "elemento pai") */}
    <Users /> <GlobalStyles />
</>,

// 2. Elemento DOM onde os componentes devem ser renderizados
document.getElementById("root"));


/* 
    Lembrete sobre a exportação, quando:

    export com default, import sem {}

    export sem default, import com {}
*/

