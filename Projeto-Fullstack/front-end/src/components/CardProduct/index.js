import React from 'react'
import { useCart } from '../../hooks/CartContext'

import { Container, Image, ProductName, ProductPrice } from './style'
import { Button } from '../Button'

export function CardProduct({ product }) {
    const { putProductInCart } = useCart()

    return (
        <Container>
            <Image src={product.url} alt="imagem do produto" />
            <div>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>{product.formatedPrice}</ProductPrice>
                <Button onClick={() => putProductInCart(product)}>Adicionar</Button> {/* product = prop do componente "CardProduct" em containers/Products */}
            </div>
        </Container>
    )
}
