import styled from 'styled-components'

export const Container = styled.div`

    background: #000000;
    padding: 0 20px;

    h2 {
        font-size: 1.6rem;
        margin: 50px 0 10px 20px;
    }

    .swiper-wrapper{ // Inspecionando a div do elemento "Swiper" no navegador, é possivel encontrar essa classe
        display: flex;
    }
`
