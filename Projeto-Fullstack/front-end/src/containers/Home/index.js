import React from 'react'

import HomeBanner from '../../assets/home-banner.png'
import Categories from '../../assets/categories.png'
import Offers from '../../assets/offers.png'
import { Container, HomeImg } from './styles'

function Home() {
    return (
        <Container>
            <HomeImg src={HomeBanner} alt="banner da página"/>
        </Container>
    )
}

export default Home