import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        text-decoration: none;
        color: #FFFFFF;
    }

    body{
        background-color: #0A0A10;    
        min-height: 100vh;
        height: 100%;
    }
`