import React from 'react'

import { useCart } from '../../hooks/CartContext'
import formatCurrency from './../../utils/formatCurrency'

import { Container, Header, Body, EmptyCart } from './styles'

export function CartItems() {
    const { cartProducts, decreaseProducts, increaseProducts, deleteProducts  } = useCart()

    return (
        <Container>
            <Header>
                <p></p> {/* Parágrafo para auxiliar a estilização com display grid*/}
                <p>Itens</p>
                <p>Preços</p>
                <p style={{ paddingRight: 30 }}>Quantidade</p>
                <p>Total</p>
                <p></p> {/* Parágrafo para auxiliar a estilização com display grid*/}
            </Header>

            {cartProducts && cartProducts.length > 0 ? (
                cartProducts.map(product => (
                    <Body key={product.id}>
                        <img src={product.url} alt="Imagem do produto" />
                        <p>{product.name}</p>
                        <p>{product.price}</p>
                        <div className="quantity-div">
                            <button onClick={() => decreaseProducts(product.id)}>-</button>
                            <p>{formatCurrency(product.quantity)}</p>
                            <button onClick={() => increaseProducts(product.id)}>+</button> {/* Função anonima para não chamar a função quando carregar o componente, só quando clicar no botão */}
                        </div>
                        <p>{formatCurrency(product.quantity * product.price)}</p>
                        <button onClick={() => deleteProducts(product.id)}>Excluir</button>
                    </Body>
                ))
            ) : (
                <EmptyCart>Carrinho vazio</EmptyCart>
            )
            }
        </Container >
    )
}