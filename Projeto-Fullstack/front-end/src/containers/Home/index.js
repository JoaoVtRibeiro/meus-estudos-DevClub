import React from 'react'

import HomeBanner from '../../assets/home-banner.png'
import { Container, HomeImg } from './styles'
import CategoriesCarousel from '../../components/CategoriesCarousel'
import OffersCarousel from '../../components/OffersCarousel'

function Home() {
    return (
        <Container>
            <HomeImg src={HomeBanner} alt="banner da página" />
            <CategoriesCarousel />
            <OffersCarousel />
        </Container>
    )
}

export default Home