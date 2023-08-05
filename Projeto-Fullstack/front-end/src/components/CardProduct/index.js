import React from 'react'

import { Container, Image, ProductName, ProductPrice } from './style'
import Button from '../Button'

function CardProduct({ product }) {
    return (
        <Container>
            <Image src={product.url} alt="imagem do produto" />
            <div>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>{product.price}</ProductPrice>
                <Button>Adicionar</Button>
            </div>
        </Container>
    )
}

export default CardProduct