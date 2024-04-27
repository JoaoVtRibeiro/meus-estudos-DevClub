import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        size: 15px;
    }
`

export default GlobalStyles /* Lembrando que quando é apenas um elemento exportado, é mais comum ser default apesar da outra opção também funcionar */