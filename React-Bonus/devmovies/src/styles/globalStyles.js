import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        text-decoration: none;
        font-family: 'Montserrat', sans-serif;
        color: white;
    }

    body {
        background: #000000;
        overflow: overlay;
    }

    ::-webkit-scrollbar { // Lembrando que esse efeito e estilização na scrollbar não funciona no firefox e internet explorer
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: lightgray;
        border-radius: 10px;
    }

    ::-webkit-scrollbar-corner{
        border-radius: 10px;
    }
`

export default GlobalStyle