import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'

import Offers from '../../assets/offers.png'
import { Container, OffersImg, CarouselItem, Image, Button } from './styles'

function OffersCarousel() {
    const [offers, setOffers] = useState([])

    useEffect(() => { // Sempre é executado quando: 1. A página é iniciada
        async function loadOffers() {
            const { data } = await api.get('products') // apenas o "data" é necessário dos atributos do objeto

            const onlyOffers = data
                .filter(product => product.offer)
                .map(product => { // Formatando todos o valores de preço de uma vez (Melhorar a Performace)
                    return { ...product, formatedPrice: formatCurrency(product.price) } //...product = espalhando todos os atributos de product e adicionando um novo (criando um novo objeto)
                })

            setOffers(onlyOffers)
        }

        loadOffers()
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
            <OffersImg src={Offers} alt="logo das ofertas" breakPoints={breakPoints} />

            <Carousel itemsToShow={4} style={{ width: '90%' }}>
                {offers && offers.map(product => {
                    <CarouselItem key={product.id}> {/* key = Permite identificação unica para cada item (Garantindo que o React irá detectar quaisquer alteração em cada um deles)  */}
                        <Image src={product.url} alt="foto da produto em oferta"></Image>
                        <p>{product.name}</p>
                        <p>{product.formatedPrice}</p>
                        <Button>Peça agora</Button>
                    </CarouselItem>
                })}
            </Carousel>
        </Container>
    )
}

export default OffersCarousel