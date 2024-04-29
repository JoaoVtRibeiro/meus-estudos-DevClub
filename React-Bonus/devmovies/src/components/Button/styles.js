import styled, { css } from 'styled-components'

const defaultStyles = css` // variavel guardando os estilos padrões dos botões
    
    border: 4px solid transparent;
    background: #ff0000;
    border-radius: 30px;
    padding: 10px 20px;
    font-size: 1.1rem;
    font-weight: 500;
    cursor: pointer;
`

export const ButtonRed = styled.button`
    ${defaultStyles}
    
    box-shadow: 0px 0px 7px 8px rgb(255 0 0 / 30%);

    &:hover{
        box-shadow: 0px 0px 7px 15px rgb(255 0 0 / 30%);
    }
`

export const ButtonWhite = styled.button`
    ${defaultStyles}

    background: transparent;
    border: 3px solid #ffffff;

    &:hover{
        background: #ffffff;
        color: #ff0000;
    }
`