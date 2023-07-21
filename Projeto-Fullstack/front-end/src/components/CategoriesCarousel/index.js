import React, { useEffect, useState } from 'react'

import api from '../../services/api'

import Categories from '../../assets/categories.png'
import { Container, CategoriesImg } from './styles'

function CategoriesCarousel() {
    const [categories, setCategories] = useState([])

    useEffect(() => { // Sempre é executado quando: 1. A página é iniciada
        async function loadCategories() {
            const { data } = await api.get('categories') // apenas o "data" é necessário dos atributos do objeto

            setCategories(data)
        }

        loadCategories()
    }, []) // Sempre é executado quando: 2. Atualização de algum componente (que devem estar dentro do [])

    return (
        <Container>
            <CategoriesImg src={Categories} alt="logo das categorias" />
        </Container>
    )
}

export default CategoriesCarousel