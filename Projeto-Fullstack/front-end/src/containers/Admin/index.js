import React from 'react'

import { SideMenuAdmin } from '../../components/SideMenuAdmin'
import { Orders } from './Orders'
import { ListProducts } from './ListProducts'
import { Container, ContainerItems } from '/style.js'


export function Admin() {
    return (
        <Container>
            <SideMenuAdmin />
            <ContainerItems>
                {/* <Orders /> */}
                <ListProducts />
            </ContainerItems>
        </Container>
    )
}