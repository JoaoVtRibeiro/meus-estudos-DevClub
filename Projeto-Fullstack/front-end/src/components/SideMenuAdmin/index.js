import React from 'react'

import LogoutIcon from '@mui/icons-material/Logout'

import listLinks from './menu-list'
import { Container, ItensContainer, ListLink } from './styles'

export function SideMenuAdmin() {
    return (
        <Container>
            <hr></hr>
            {listLinks.map(item => (
                <ItensContainer key={item.id} isActive={true}>
                    <item.icon className="icon" />
                    <ListLink to={item.link}>{item.label}</ListLink>
                </ItensContainer>
            ))}
            <hr></hr>
            <ItensContainer>
                <LogoutIcon style={{ position: 'absolute', bottom: '30px'}}/>
                <ListLink style={{ color: '#FFFFFF' }}>Sair</ListLink>
            </ItensContainer>
        </Container>
    )
}