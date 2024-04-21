import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'
import React from 'react'
import { useHistory } from 'react-router-dom'

import Cart from '../../assets/cart.svg'
import User from '../../assets/user.svg'
import { useUser } from '../../hooks/UserContext'
import {
    Container,
    ContainerLeft,
    PageLink,
    ContainerRight,
    Line,
    PageLinkExit,
    ContainerText,
    AdminLink,
    ContainerAdmin
} from './styles'

export function Header() {
    const { logout, userData } = useUser()
    console.log(userData)

    const {
        push,
        location: { pathname } // Segunda desestruturação (pathname está em location)
    } = useHistory()

    const logoutUser = () => {
        logout()
        push('/login')
    }

    return (
        <Container>
            <ContainerLeft>
                <PageLink onClick={() => push('/')} isActive={pathname === '/'}>
                    Home
                </PageLink>

                <PageLink
                    onClick={() => push('/produtos')}
                    isActive={pathname.includes('/produtos')}
                >
                    {/* .includes, se o nome do path incluir 'produtos' ficará ativo (já que pode alterar por conta dos ids dos produtos junto ao path) */}
                    Ver Produto
                </PageLink>
            </ContainerLeft>

            <ContainerRight>
                <PageLink onClick={() => push('/carrinho')}>
                    <img src={Cart} alt="icone-carrinho" />
                </PageLink>
                <Line></Line>
                <PageLink>
                    <img src={User} alt="icone-usuario" />
                </PageLink>

                <ContainerText>
                    <p>Olá, {userData.name}</p>
                    <PageLinkExit onClick={logoutUser}>Sair</PageLinkExit>
                </ContainerText>
                <ContainerAdmin>
                    <AdminLink
                        onClick={() => push('/pedidos')}
                        adminActive={userData.admin}
                    >
                        <AdminPanelSettingsIcon />
                        Admin
                    </AdminLink>
                </ContainerAdmin>
            </ContainerRight>
        </Container>
    )
}

/* 
    Lembrando, o Header será retornado em 'routes/private-route.js' (Apenas para páginas que o usuário está logado)
*/
