import React from 'react'

import { SideMenuAdmin } from '../../components/SideMenuAdmin'
import Orders from './Orders'
import ListProducts from './ListProducts'
import NewProduct from './NewProduct'
import EditProduct from './EditProduct'
import paths from '../../constants/path'
import { Container, ContainerItems } from './styles.js'

export function Admin({ math: { path } }) { // props dos componentes em components/SideMenuAdmin (caso aja duvida: console.log(props)) *obs fim da página
    return (
        <Container>
            <SideMenuAdmin path={path} />
            <ContainerItems>
                {path === paths.OrderAdm && <Orders /> } {/* Se path for igual a url então renderizar componente */}
                {path === paths.ListProductsAdm && <ListProducts /> }
                {path === paths.NewProductAdm && <NewProduct /> }
                {path === paths.EditProductsAdm && <EditProduct /> }   
            </ContainerItems>
        </Container>
    )
}

/* 
    Obs: Esses props são um padrão de todo componente
*/