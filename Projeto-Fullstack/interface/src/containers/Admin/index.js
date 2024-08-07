import PropTypes from 'prop-types'
import React from 'react'

import { SideMenuAdmin } from '../../components/SideMenuAdmin'
import paths from '../../constants/paths'
import Categories from './Categories'
import EditCategory from './EditCategory'
import EditProduct from './EditProduct'
import ListProducts from './ListProducts'
import NewCategory from './NewCategory'
import NewProduct from './NewProduct'
import Orders from './Orders'
import { Container, ContainerItems } from './styles'

// props dos componentes em components/SideMenuAdmin (caso aja duvida: console.log(props)) *obs fim da página
export function Admin({ match: { path } }) {
    return (
        <Container>
            <SideMenuAdmin path={path} />
            <ContainerItems>
                {/* Se path for igual "==="" a url então "&&" renderizar componente */}
                {path === paths.Order && <Orders />}
                {path === paths.ProductsList && <ListProducts />}
                {path === paths.NewProduct && <NewProduct />}
                {path === paths.EditProduct && <EditProduct />}
                {path === paths.Categories && <Categories />}
                {path === paths.NewCategory && <NewCategory />}
                {path === paths.EditCategory && <EditCategory />}
            </ContainerItems>
        </Container>
    )
}

Admin.propTypes = {
    match: PropTypes.shape({
        path: PropTypes.string
    })
}

/* 
    Obs: Esses props são um padrão de todo componente
*/
