import styled from 'styled-components'

export const Container = styled.header`
  z-index: 99; // z-index + position fixed para ficar a frente da máscara de sombreamento
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 50px;

  img {
    width: 25%;
  }
`

export const Menu = styled.ul`
    display: flex;
    gap: 50px;
    list-style: none; // remove o circulo preto que fica ao lado da li
`

export const Li = styled.li`
    font-size: 1.55rem;
    font-weight: 600;
    position: relative; // permitir que a posição inicial do after seja referente ao li
    cursor: pointer;

    a { // Mesmo sendo importação do react-router-dom, o Link ainda sim é um a
        text-decoration: none;
    }

    &::after {
        content: '';
        height: 3px;
        width: ${props => props.isActive ? '100%' : 0};
        background-color: #189b20;
        position: absolute; // posição incial será referente ao pai (li, position: relative)
        bottom: -10px;
        transition: width 0.5s ease-in-out; // efeito de transação por mudança, "propriedade - tempo - tipo"
        // para o efeito sair do meio para fora
        left: 50%; // irá colocar a barrinha para esquerda
        transform: translateX(-50%); // irá espelhar/virar ao contrário 50% dele
        // Dessa forma, o 50 original começa do meio e o espelhado também, dando a impressão que a barrinha irá crescer de dentro para fora

    }

    &:hover::after { // efeito de hover será no after
      width: 100%;
    }
`