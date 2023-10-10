import React from 'react'

import LogoutIcon from '@mui/icons-material/Logout'

import { useUser } from '../../hooks/UserContext'
import listLinks from './menu-list'
import { Container, ItensContainer, ListLink } from './styles'
import paths from '../../constants/path'

export function SideMenuAdmin({ path }) {

    const { logOutUser } = useUser()

    return (
        <Container>
            <hr></hr>
            {listLinks.map(item => (
                <ItensContainer key={item.id} isActive={path === item.link}>
                    <item.icon className="icon" />
                    <ListLink to={item.link}>{item.label}</ListLink>
                </ItensContainer>
            ))}
            <hr></hr>
            <ItensContainer>
                <LogoutIcon style={{ position: 'absolute', bottom: '30px'}}/>
                <ListLink to={paths.Login} onClick={logOutUser} style={{ color: '#FFFFFF' }}>Sair</ListLink>
            </ItensContainer>
        </Container>
    )
}