import React from 'react'

import User from '../../assets/user.png'
import Cart from '../../assets/cart.png'
import { Container, LeftDiv, PageLink, RightDiv, Line, UserDiv } from './styles'



export function Header() {
    return (
        <Container>
            <LeftDiv>
                <PageLink>Home</PageLink>
                <PageLink>Ver Produtos</PageLink>
            </LeftDiv>

            <RightDiv>
                <PageLink><img src={User} alt='logo do usuário' /></PageLink>
                <Line></Line>
                <PageLink><img src={Cart} alt='carrinho' /></PageLink>
            </RightDiv>

            <UserDiv>
                <p>Olá, User</p>
                <a>Sair</a>
            </UserDiv>
        </Container>
    )
}