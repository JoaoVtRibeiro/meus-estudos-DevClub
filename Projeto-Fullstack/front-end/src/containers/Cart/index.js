import React from 'react'

import CartBanner from '../../assets/cartpage-banner.png'
import { CartItems, CartResume } from '../../components'
import { Container, CartImg, Wrapper } from './styles'

export function Cart() {
    return (
        <Container>
            <CartImg src={CartBanner} alt="banner-da-página-do-carrinho" />
            <Wrapper>
                <CartItems />
                <CartResume />
            </Wrapper>
        </Container>
    )
}