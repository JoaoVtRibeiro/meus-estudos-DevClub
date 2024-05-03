import styled, { keyframes } from 'styled-components'

const scale = keyframes` // keyframes permite
    from {
        transform: scale(0)
    } to {
        transform: scale(1)
    }
`

export const Background = styled.div`
    background-image: url(${props => props.img});
    background-position: center;
    background-size: cover; // Adapta a imagem ao tamanho que ela tem disponivel (se for maior que o espaço diminui a img, se for menor aumenta a img)
    background-repeat: no-repeat; // caso a imagem for muito pequena, por padrão o navagador irá repetir ela, com essa configuração não acontece
    height: 50vh;
    position: relative; // torna o absolute de before e after relativo ao background

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5)
    }

    &::after {
        content: '';
        position: absolute; // relativo a esse mesmo background
        left: 0;
        bottom: 0;
        width: 100%;
        height: 120px;
        background-image: linear-gradient(to top, #0f0f0f, rgba(0, 0, 0, 0))
    }
`

export const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: flex-start;
   height: 100%;
   max-width: 1500px; // Não irá se expandir em telas maiores
   margin-top: -100px; // Negativo para "invadir" o background, indo levemente para cima
`

export const Cover = styled.div`
    padding: 20px;
    display: flex;
    align-items: flex-start;
    height: 100%;
    z-index: 2;

    img {
        width: 500px;
        border-radius: 30px;
        box-shadow: rgb(100 100 111 / 50%) 0px 7px 29px 0px;
        animation: ${scale} 0.4s linear;
    }
`

export const Info = styled.div`
    padding: 20px;
    width: 50%;
    z-index: 2;
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    h2 {
        font-size: 3rem;
        font-weight: 700;
    }

    p {
        font-size: 1rem;
        font-weight: 600;
        margin-top: 20px;
        margin-bottom: 30px;
        text-align: justify;
    }
`

export const ContainerTrailers = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    width: 100%;

    div {
        display: flex;
        flex-direction: column;
        max-width: 1000px; // Não crescerem mais do que 1000px para não ficar desproporcional em uma tela maior
        width: 100%;
        height: 100%;
        margin: 30px 0;
    }

    h4 {
        font-size: 1.1rem;
        font-weight: 700;
        margin-bottom: 10px
    }

    iframe {
        border: none;
    }
`