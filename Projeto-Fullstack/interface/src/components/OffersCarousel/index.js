import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'
import { useHistory } from 'react-router-dom'

import Offers from '../../assets/offers.png'
import { useCart } from '../../hooks/CartContext'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import {
    Container,
    CategoryImage,
    ContainerItems,
    Image,
    Button
} from './styles'

export function OffersCarousel() {
    const [offers, setOffers] = useState([])
    const { putProductInCart } = useCart()
    const { push } = useHistory()

    // Sempre é executado quando: 1. A página é iniciada
    useEffect(() => {
        async function loadOffers() {
            const { data } = await api.get('products') // apenas o "data" é necessário dos atributos do objeto

            const onlyOffer = data
                .filter(product => product.offer)
                // Formatando todos o valores de preço de uma vez (Melhorar a Performace)
                .map(product => {
                    // ...product = ... (spread operator) espalhando todos os atributos de product e adicionando um novo (criando um novo objeto)
                    return {
                        ...product,
                        formatedPrice: formatCurrency(product.price)
                    }
                })

            setOffers(onlyOffer)
        }

        loadOffers()
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
            <CategoryImage src={Offers} alt="seção de ofertas" />
            <Carousel
                itemsToShow={5}
                style={{ width: '90%' }}
                breakPoints={breakPoints}
            >
                {offers &&
                    offers.map(product => (
                        // key = Permite identificação unica para cada item (Garantindo que o React irá detectar quaisquer alteração em cada um deles)
                        <ContainerItems key={product.id}>
                            <Image
                                src={product.url}
                                alt="foto do produto em oferta"
                            />
                            <p className="productName">{product.name}</p>
                            <p>{product.formatedPrice}</p>
                            <Button
                                onClick={() => {
                                    putProductInCart(product)
                                    push('/carrinho')
                                }}
                            >
                                Peça agora
                            </Button>
                        </ContainerItems>
                    ))}
            </Carousel>
        </Container>
    )
}
