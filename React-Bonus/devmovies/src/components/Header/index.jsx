import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom' // useLocation permite saber a página atual

import Logo from './../../assets/logo.png'
import { Container, Menu, Li } from './styles'

function Header() {
    const [changeBackgroud, setChangeBackground] = useState(false)

    const { pathname } = useLocation()
    // Desestruração -> pegando apenas o pathname de useLocation
    // pathname terá como valor a rota atual, ex: /filmes, /series

    window.onscroll = () => {
        console.log(window.scrollY)

        if (window.scrollY > 150) {
            setChangeBackground(true)
        }

        if (window.scrollY < 150) {
            setChangeBackground(false)
        }


        // window são informações da tela
        // onscroll função dentro de window que será ativa ao "scrollar" a tela
        // scrollY localização atual da página no eixo Y
    }



    return (
        <Container changeBackgroud={changeBackgroud}>
            <img src={Logo} alt='logo-devfilmes' />
            <Menu>
                <Li isActive={pathname === '/'}> {/* Quando for somente a barra, utilizar ===, já que includes irá encontrar várias barras então daria erro*/}
                    <Link to='/'>Home</Link>
                </Li>
                <Li isActive={pathname.includes('filmes')}> {/* includes vai para o endereço que contenha exatamente o que lhe foi informado */}
                    <Link to='/filmes'>Filmes</Link>
                </Li>
                <Li isActive={pathname.includes('series')}>
                    <Link to='/series'>Séries</Link>
                </Li>
            </Menu>
        </Container>
    )
}

export default Header