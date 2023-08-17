import React from 'react'

import { useCart } from './../../hooks/CardContext'
import formatCurrency from './../../utils/formatCurrency'

import { Container, Header, Body } from './styles'

export function CartItems() {
    const { cartProducts } = useCart()

    return (
        <Container>
            <Header>
                <p></p>
                <p>Itens</p>
                <p>Preços</p>
                <p>Quantidade</p>
                <p>Total</p>
            </Header>

            {cartProducts &&
                cartProducts.map(product => (
                    <Body key={product.id}>
                        <img src={product.url} alt="Imagem do produto" />
                        <p>{product.name}</p>
                        <p>{product.price}</p>
                        <p>{formatCurrency(product.quantity)}</p>
                        <p>{formatCurrency(product.quantity * product.price)}</p>
                    </Body>
                ))}
        </Container>
    )
}