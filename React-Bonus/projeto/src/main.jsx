/* Nesse arquivo serão importados os componentes para renderização */

import React from 'react'
import ReactDOM from 'react-dom/client' // Permite manipular a DOM (arvore de elementos html)
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

/* 
  ReactDOM "cria uma raiz" (indo ao html.pegando um id('chamado root')).dentro desse elemento ele renderiza(
    <>
      <Renderizando o App />
    <>
  )

  OBS: Componentes React em sua maioria são codados com funções, porém alguns antigos podem ser por classe
      Além disso também podem ser arrow function (não faz diferença nessa caso)

      Ex: function comum
      function App() {

        return (
          <div>Hello React</div>
        )
      }

      export default App

      Ex: Arrow function

      const App = () => {

        return (
          <div>Hello React</div>
        )
      }

      export default App
*/