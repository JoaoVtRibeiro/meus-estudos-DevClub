import React from 'react'

import { Container, Image, ProductName, ProductPrice } from './style'
import Button from '../Button'

export function CardProduct({ product }) {
    return (
        <Container>
            <Image src={product.url} alt="imagem do produto" />
            <div>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>{product.formatedPrice}</ProductPrice>
                <Button>Adicionar</Button>
            </div>
        </Container>
    )
}
