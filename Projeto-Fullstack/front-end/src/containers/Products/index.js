import React from 'react'

import ProductsBanner from '../../assets/products-banner.png'
import { Container, ProductsImg } from './styles'

function Products() {
    return (
        <Container>
            <ProductsImg src={ProductsBanner} alt="banner da página" />
        </Container>
    )
}

export default Products