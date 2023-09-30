import React from 'react'
import { useHistory } from 'react-router-dom'

import { useUser } from '../../hooks/UserContext'
import User from '../../assets/user.png'
import Cart from '../../assets/cart.png'
import { Container, LeftDiv, PageLink, RightDiv, Line, UserDiv, LogOutLink } from './styles'

export function Header() {
    const { logOutUser, receivedUserData } = useUser()

    const logOut = () => {
        logOutUser()
        push('/login')
    }

    const { push,
        location: { pathname } // Segunda desestruturação (pathname está em location)
    } = useHistory()

    return (
        <Container>
            <LeftDiv>
                <PageLink onClick={() => push('/')} isActive={pathname === '/'}>Home</PageLink>
                <PageLink onClick={() => push('/produtos')} isActive={pathname.includes('produtos')}>Ver Produtos</PageLink>
                {/* .includes, se o nome do path incluir 'produtos' ficará ativo (já que pode alterar por conta dos ids dos produtos junto ao path) */}
            </LeftDiv>

            <RightDiv>
                <PageLink><img src={User} alt='logo do usuário' /></PageLink>
                <Line></Line>
                <PageLink onClick={() => push('/carrinho')}><img src={Cart} alt='carrinho' /></PageLink>
            </RightDiv>

            <UserDiv>
                <p>Olá, {receivedUserData.name}</p>
                <LogOutLink onClick={() => logOut()}>Sair</LogOutLink>
            </UserDiv>
        </Container>
    )
}

/* 
    Lembrando, o Header será retornado em 'routes/private-route.js' (Apenas para páginas que o usuário está logado)
*/