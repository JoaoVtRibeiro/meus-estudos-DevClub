import React from 'react'
import PropTypes from 'prop-types'

import { SideMenuAdmin } from '../../components/SideMenuAdmin'
import paths from '../../constants/path'
import EditProduct from './EditProduct'
import ListProducts from './ListProducts'
import NewProduct from './NewProduct'
import Orders from './Orders'

import { Container, ContainerItems } from './styles.js'

export function Admin({ match: { path } }) { // props dos componentes em components/SideMenuAdmin (caso aja duvida: console.log(props)) *obs fim da página
    return (
        <Container>
            <SideMenuAdmin path={path} />
            <ContainerItems>
                {path === paths.OrderAdm && <Orders />} {/* Se path for igual a url então renderizar componente */}
                {path === paths.ListProductsAdm && <ListProducts />}
                {path === paths.NewProductAdm && <NewProduct />}
                {path === paths.EditProductsAdm && <EditProduct />}
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