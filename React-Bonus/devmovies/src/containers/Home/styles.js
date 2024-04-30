import styled from 'styled-components'

export const Background = styled.div`
    background-image: url(${props => props.img});
    height: 100vh;
    background-position: center;
    background-size: cover; // Adapta a imagem ao tamanho que ela tem disponivel (se for maior que o espaço diminui a img, se for menor aumenta a img)
    display: flex;
    justify-content: center;
    align-items: center;

    &::before { // conteúdo antes do primario
        content: ''; // Para o before/after funcionar é necessário um content, mesmo que vazio
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
    }
`

export const Container = styled.section`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    max-width: 1500px; // Garantir que eles fiquem mais agrupados, em telas muito grandes
`

export const Info = styled.div`
    z-index: 2; // Faz com que o elemento tenha uma "prioridade" sobre os outros, no caso o fundo escuro
    width: 40%;
    text-align: justify;
    padding: 20px;

    h1 {
        font-size: 3rem;
        font-weight: 700;
    }

    p {
        font-size: 1.2rem;
        font-weight: 500;
        margin-top: 30px;
        margin-bottom: 20px;
    }
`

export const Poster = styled.figure`
    z-index: 2;

    img{
        height: 50vh; 
        border-radius: 30px;
    }
`

export const DivButtons = styled.div`
    display: flex;
    gap: 20px;
`