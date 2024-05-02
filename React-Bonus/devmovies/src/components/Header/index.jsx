import { Link, useLocation } from 'react-router-dom' // useLocation permite saber a página atual

import Logo from './../../assets/logo.png'
import { Container, Menu, Li } from './styles'

function Header() {
    const { pathname } = useLocation() 
    // Desestruração -> pegando apenas o pathname de useLocation
    // pathname terá como valor a rota atual, ex: /filmes, /series

    return (
        <Container>
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