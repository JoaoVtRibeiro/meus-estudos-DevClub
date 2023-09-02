import styled from 'styled-components'

export const Container =  styled.div`
    background-color: #e5e5e5;
    min-height: calc(100vh - 72px); // esses pixels são do Header (sendo retorando pelo private-route.js);
`

export const CartImg = styled.img`
    width: 100%;
    height: 35vh;
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 30px;
    padding-bottom: 30px;
`
