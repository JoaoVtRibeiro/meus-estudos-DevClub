import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import Category from '../../assets/categories.png'
import api from '../../services/api'
import {
    Container,
    CategoryImage,
    ContainerItems,
    Image,
    Button
} from './styles'

export function CategoryCarousel() {
    const [categories, setCategories] = useState([])

    // Sempre é executado quando: 1. A página é iniciada
    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('categories') // apenas o "data" é necessário dos atributos do objeto

            setCategories(data)
        }

        loadCategories()
    }, []) // Sempre é executado quando: 2. Atualização de algum componente (que devem estar dentro do [])

    // "Pontos de quebra" indicando a partir de um valor de largura quantos itens serão mostrados (responsividade)
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 400, itemsToShow: 2 },
        { width: 600, itemsToShow: 3 },
        { width: 900, itemsToShow: 4 },
        { width: 1300, itemsToShow: 5 }
    ]

    return (
        <Container>
            <CategoryImage src={Category} alt="seção categoria" />
            <Carousel
                itemsToShow={5}
                style={{ width: '90%' }}
                breakPoints={breakPoints}
            >
                {categories &&
                    categories.map(category => (
                        <ContainerItems key={category.id}>
                            {/* key = Permite identificação unica para cada item (Garantindo que o React irá detectar quaisquer alteração em cada um deles)  */}
                            <Image src={category.url} alt="foto da categoria" />
                            <Button
                                to={{
                                    pathname: '/produtos',
                                    state: { categoryId: category.id }
                                }}
                            >
                                {category.name}
                            </Button>
                        </ContainerItems>
                    ))}
            </Carousel>
        </Container>
    )
}

/* Lembrando:

    'to' parâmetro do react-router-dom

    'state' permite criar uma variavel para nandar alguma informação, basicamento pathname você irá definir qual você vai mandar e state o que vai mandar
*/
