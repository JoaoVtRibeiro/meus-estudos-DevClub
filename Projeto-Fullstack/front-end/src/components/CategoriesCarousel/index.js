import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

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

            <Carousel itemsToShow={4}>
                {categories && categories.map(category => {
                    <div key={category.id}> {/* key = Permite identificação unica para cada item (Garantindo que o React irá detectar quaisquer alteração em cada um deles)  */}
                        <img src={category.url} alt="foto da categoria"></img>
                        <button>{category.name}</button>
                    </div>
                })}
            </Carousel>
        </Container>
    )
}

export default CategoriesCarousel