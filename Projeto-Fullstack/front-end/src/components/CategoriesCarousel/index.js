import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import api from '../../services/api'

import Categories from '../../assets/categories.png'
import { Container, CategoriesImg, CarouselItem, Image, Button } from './styles'

export function CategoriesCarousel() {
    const [categories, setCategories] = useState([])

    useEffect(() => { // Sempre é executado quando: 1. A página é iniciada
        async function loadCategories() {
            const { data } = await api.get('categories') // apenas o "data" é necessário dos atributos do objeto

            setCategories(data)
        }

        loadCategories()
    }, []) // Sempre é executado quando: 2. Atualização de algum componente (que devem estar dentro do [])

    const breakPoints = [ // "Pontos de quebra" indicando a partir de um valor de largura quantos itens serão mostrados (responsividade)
        { width: 1, itemsToShow: 1 },
        { width: 400, itemsToShow: 2 },
        { width: 600, itemsToShow: 3 },
        { width: 900, itemsToShow: 4 },
        { width: 1300, itemsToShow: 5 }
    ]

    return (
        <Container>
            <CategoriesImg src={Categories} alt="logo das categorias" breakPoints={breakPoints} />

            <Carousel itemsToShow={4} style={{ width: '90%' }}>
                {categories && categories.map(category => {
                    <CarouselItem key={category.id}> {/* key = Permite identificação unica para cada item (Garantindo que o React irá detectar quaisquer alteração em cada um deles)  */}
                        <Image src={category.url} alt="foto da categoria"></Image>
                        <Button to={{
                            pathname: '/produtos', state: { categoryId: category.id }
                        }}
                        >{category.name}</Button> 
                    </CarouselItem>
                })}
            </Carousel>
        </Container>
    )
}

/* Lembrando:

    'to' parâmetro do react-router-dom

    'state' permite criar uma variavel para nandar alguma informação, basicamento pathname você irá definir qual você vai mandar e state o que vai mandar
*/

