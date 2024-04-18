import React from 'react'
import PropTypes from 'prop-types'

import LogoutIcon from '@mui/icons-material/Logout'

import { useUser } from '../../hooks/UserContext'
import listLinks from './menu-list'
import { Container, ItensContainer, ListLink } from './styles'
import paths from '../../constants/path'

export function SideMenuAdmin({ path }) {

    const { logout } = useUser()

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
                <LogoutIcon style={{ position: 'fixed', bottom: '30px'}}/>
                <ListLink to={paths.Login} onClick={logout} style={{ color: '#FFFFFF' }}>Sair</ListLink>
            </ItensContainer>
        </Container>
    )
}

SideMenuAdmin.propTypes = {
    path: PropTypes.string
}