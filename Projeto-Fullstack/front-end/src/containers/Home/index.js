import React from 'react'

import HomeBanner from '../../assets/home-banner.png'
import { Container, HomeImg } from './styles'
import { CategoriesCarousel, OffersCarousel } from '../../components'

export function Home() {
    return (
        <Container>
            <HomeImg src={HomeBanner} alt="banner-da-pagina-principal" />
            <CategoriesCarousel />
            <OffersCarousel />
        </Container>
    )
}