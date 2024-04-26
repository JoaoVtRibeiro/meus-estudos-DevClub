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
*/