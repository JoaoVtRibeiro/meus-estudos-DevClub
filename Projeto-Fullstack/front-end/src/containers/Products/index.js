import React, { useEffect, useState } from 'react'

import api from '../../services/api'

import ProductsBanner from '../../assets/products-banner.png'
import { Container, ProductsImg, CategoryButton, CategoriesMenu } from './styles'

function Products() {
    const [categories, setCategories] = useState([])

    useEffect(() => { // Sempre é executado quando: 1. A página é iniciada
        async function loadCategories() {
            const { data } = await api.get('categories') // apenas o "data" é necessário dos atributos do objeto

            const addAllCategories = [{ id: 0, name: 'Todas' }, ...data]

            setCategories(addAllCategories)
        }

        loadCategories()
    }, [])

    return (
        <Container>
            <ProductsImg src={ProductsBanner} alt="banner da página" />
            <CategoriesMenu>
                {categories && categories.map(category => (
                    <CategoryButton type="button" key={category.id}>{category.name}</CategoryButton>
                ))}
            </CategoriesMenu>
        </Container >
    )
}

export default Products