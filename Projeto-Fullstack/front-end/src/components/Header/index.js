import React from 'react'

import User from '../../assets/user.png'
import Cart from '../../assets/cart.png'
import { Container, LeftDiv, RightDiv, UserDiv, PageLink } from './styles'



export function Header() {
    return (
        <Container>
            <LeftDiv>
                <PageLink>Home</PageLink>
                <PageLink>Ver Produtos</PageLink>
            </LeftDiv>

            <RightDiv>
                <PageLink><img src={User} alt='logo do usuário' /></PageLink>
                <PageLink><img src={Cart} alt='carrinho' /></PageLink>
            </RightDiv>

            <UserDiv>
                <p>Olá, User</p>
                <PageLink>Sair</PageLink>
            </UserDiv>
        </Container>
    )
}