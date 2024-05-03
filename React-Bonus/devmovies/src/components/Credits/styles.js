import styled from 'styled-components'

export const Title = styled.h4`
    font-size: 1.8rem;
    font-weight: 700;
`

export const Container = styled.div`
    display: flex;
    margin-top: 30px;
    gap: 10px;

    div{
        display: flex;
        flex-direction: column;
    }

    p {
        text-align: center;
    }

    img {
        height: 200px;
    }
`