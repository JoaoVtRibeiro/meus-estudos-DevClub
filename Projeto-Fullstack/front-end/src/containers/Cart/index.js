import React from 'react'

import CartBanner from '../../assets/cartpage-banner.png'
import { Container, CartImg, Wrapper } from './styles'
import { CartItems } from '../../components'


export function Cart() {
    return (
        <Container>
            <CartImg src={CartBanner} alt="banner da página" />
            <Wrapper>
                <CartItems />
            </Wrapper>
        </Container>
    )
}