import React from 'react'

import { Container } from './styles'
import { Button } from '../Button'

export function CartResume() {
    return (
        <>
            <Container>
                <div>
                    <h2>Resumo do pedido</h2>
                    <p>Itens</p>
                    <p>R$ 10,00</p>
                    <p>Taxa de entrega</p>
                    <p>R$ 10,00</p>
                </div>
                <div>
                    <p>Total</p>
                    <p>R$ 20,00</p>
                </div>
            </Container>
            <Button>Finalizar Pedido</Button>
        </> /* Fragment, para fazer com que o botão assuma o tamanho total que ele tem disponivel (não ser alterado pela estilização do container)  */
    )
}