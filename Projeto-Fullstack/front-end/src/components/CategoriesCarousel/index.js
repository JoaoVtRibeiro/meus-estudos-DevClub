import React from 'react'

import Categories from '../../assets/categories.png'
import { Container, CategoriesImg } from './styles'

function CategoriesCarousel() {
    return (
        <Container>
            <CategoriesImg src={Categories} alt="logo das categorias"/>
        </Container>
    )
}

export default CategoriesCarousel