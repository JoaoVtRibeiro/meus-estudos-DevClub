import React, { useEffect } from 'react'

import api from '../../services/api'

import Categories from '../../assets/categories.png'
import { Container, CategoriesImg } from './styles'

function CategoriesCarousel() {
    useEffect(() =>{ // Sempre é executado quando: 1. A página é iniciada
        async function loadCategories() {
            const response = await api.get('categories')

            console.log(response)
        }

        loadCategories()
    }, []) // Sempre é executado quando: 2. Atualização de algum componente (que devem estar dentro do [])

    return (
        <Container>
            <CategoriesImg src={Categories} alt="logo das categorias"/>
        </Container>
    )
}

export default CategoriesCarousel