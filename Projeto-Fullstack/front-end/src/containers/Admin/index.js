import React from 'react'

import { Orders } from './Orders'
import { Container } from '/style.js'
import { SideMenuAdmin } from '../../components/SideMenuAdmin'

export function Admin() {
    return (
        <Container>
            <SideMenuAdmin />
            <Orders />
        </Container>
    )
}