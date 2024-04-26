import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }
`

export default GlobalStyles /* Lembrando que quando é apenas um elemento exportado, é mais comum ser default apesar da outra opção também funcionar */