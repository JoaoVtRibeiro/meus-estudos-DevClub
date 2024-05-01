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
    cursor: pointer;

    a { // Mesmo sendo importação do react-router-dom, o Link ainda sim é um a
        text-decoration: none;
    }
`