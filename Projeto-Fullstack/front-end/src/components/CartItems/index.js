import React from 'react'

import { useCart } from './../../hooks/CardContext'
import formatCurrency from './../../utils/formatCurrency'

import { Container, Header, Body, EmptyCart } from './styles'

export function CartItems() {
    const { cartProducts, increaseProducts } = useCart()

    return (
        <Container>
            <Header>
                <p></p> {/* Parágrafo para auxiliar a estilização com display grid*/}
                <p>Itens</p>
                <p>Preços</p>
                <p style={{ paddingRight: 30 }}>Quantidade</p>
                <p>Total</p>
            </Header>

            {cartProducts && cartProducts.length > 0 ? (
                cartProducts.map(product => (
                    <Body key={product.id}>
                        <img src={product.url} alt="Imagem do produto" />
                        <p>{product.name}</p>
                        <p>{product.price}</p>
                        <div className="quantity-div">
                            <button>-</button>
                            <p>{formatCurrency(product.quantity)}</p>
                            <button onClick={() => increaseProducts(product.id)}>+</button> {/* Função anonima para não chamar a função quando carregar o componente, só quando clicar no botão */}
                        </div>
                        <p>{formatCurrency(product.quantity * product.price)}</p>
                    </Body>
                ))
            ) : (
                <EmptyCart>Carrinho vazio</EmptyCart>
            )
            }
        </Container >
    )
}