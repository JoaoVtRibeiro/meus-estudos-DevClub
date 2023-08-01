import React, { useEffect, useState } from 'react'

import api from '../../services/api'

import ProductsBanner from '../../assets/products-banner.png'
import { Container, ProductsImg, CategoryButton, CategoriesMenu } from './styles'

function Products() {
    const [categories, setCategories] = useState([])
    const [activeCategory, setActiveCategory] = useState(0) // 0 porque começa ativo na categoria "todas"

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
                    <CategoryButton type="button"
                        key={category.id}
                        isActiveCategory={activeCategory === category.id}
                        onClick={() => {setActiveCategory(category.id)}} // () => {} / função anônima para evitar que setActive seja chamado quando o botão for renderizado e sim só quando for clicado
                    >
                        {category.name}
                    </CategoryButton>
                ))}
            </CategoriesMenu>
        </Container >
    )
}

export default Products