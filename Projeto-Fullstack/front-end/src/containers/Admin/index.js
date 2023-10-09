import React from 'react'

import { SideMenuAdmin } from '../../components/SideMenuAdmin'
import { Orders } from './Orders'
import { ListProducts } from './ListProducts'
import { Container, ContainerItems } from '/style.js'
import paths from '../../constants/path'


export function Admin({ math: { path } }) { // props dos componentes em components/SideMenuAdmin (caso aja duvida: console.log(props)) *obs fim da página
    return (
        <Container>
            <SideMenuAdmin />
            <ContainerItems>
                {path === paths.OrderAdm && <Orders /> } {/* Se path for igual a url então renderizar componente */}
                {path === paths.OrderAdm && <ListProducts /> }   
            </ContainerItems>
        </Container>
    )
}

/* 
    Obs: Esses props são um padrão de todo componente
*/