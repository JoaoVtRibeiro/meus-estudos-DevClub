import React from 'react'

import listLinks from './menu-list'
import { Container, ItensContainer, ListLink } from './styles'

export function SideMenuAdmin() {
    return (
        <Container>
            <hr></hr>
            {listLinks.map(item => {
                <ItensContainer key={item.id}>
                    <ListLink to={item.link}>{item.label}</ListLink>
                </ItensContainer>
            })}
        </Container>
    )
}