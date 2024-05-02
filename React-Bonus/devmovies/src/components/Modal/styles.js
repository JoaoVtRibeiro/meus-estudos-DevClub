import styled from 'styled-components'

export const Background = styled.div`
    height: 100vh;
    width: 100vw;
    z-index: 4;
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute; 
    // absolute faz ele se referenciar ao canto superior esquerdo do elemento pai, no caso o Background da Home, onde o Modal está
    // enquanto static, ele iria seguir o fluxo dos outros elementos ficando para a esquerda, estando absolute ele irá ignorar essa condição
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Container = styled.div`
    background: #000;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    padding: 50px;
    max-width: 1200px; // Caso a tela for muito grande, ele não irá se expandir

    iframe {
        border: none;
    }

    button {
        background: transparent;
        border: none;
        cursor: pointer;
        position: absolute;
        top: 0px; // começa no 0 do topo referente ao elemento pai (esse mesmo Container)
        right: 20px; // começa a 20px da direita referente ao elemento pai (esse mesmo Container)
        font-size: 2rem;
    }
`