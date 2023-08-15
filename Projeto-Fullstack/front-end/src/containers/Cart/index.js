import React from 'react'

import CartBanner from '../../assets/cartpage-banner.png'
import { Container, CartImg } from './styles'
//import  from '../../components'

export function Cart() {
    return (
        <Container>
            <CartImg src={CartBanner} alt="banner da página" />
            
        </Container>
    )
}