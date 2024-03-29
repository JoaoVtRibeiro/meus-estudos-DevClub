import ReactSelect from 'react-select' // componente da biblioteca

import styled from 'styled-components'

export const Container = styled.div`
    background-color: #efefef;
    min-height: 100vh;
    padding: 20px;
`

export const ProductsImg = styled.img`
    width: 68px;
    border-radius: 5px;
`

export const ReactSelectStyle = styled(ReactSelect)` /* Componentes importatos, as vezes, vão ser estilizados em classes especificas (verificar no console do navegador ou na documentação) */
    width: 250px;

    .css-1s2u09g-control {
        cursor: pointer;
    }
`

export const Menu = styled.div`
    display: flex;
    gap: 50px;
    justify-content: center;
    margin: 20px 0;
`

export const LinkMenu= styled.a`
    color: #323d5d;
    cursor: pointer;
    font-weight: ${ props => props.isActiveStatus ? 'bold' : '400'};
    border-bottom: ${ props => props.isActiveStatus ? '2px solid #9758A6' : 'none'};
    padding-bottom: 5px;
`