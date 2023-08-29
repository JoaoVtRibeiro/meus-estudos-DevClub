import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import api from '../../services/api'
import { useCart } from '../../hooks/CartContext'
import formatCurrency from '../../utils/formatCurrency'
import { Button } from '../Button'

import { Container } from './styles'


export function CartResume() {
    const [itemsSumPrice, setitemsSumPrice] = useState(0)
    const [deliveryTax] = useState(5)

    const { cartProducts } = useCart()

    useEffect(() => {
        const sumAllItems = cartProducts.reduce((acc, current) => {
            return current.price * current.quantity + acc
        }, 0)

        setitemsSumPrice(sumAllItems)
    }, [cartProducts, deliveryTax]) //Sempre que esses tiverem alguma alteração o useEffect é executado

    const submitOrder = async () => { // Enviar pedido para a api
        const order = cartProducts.map(product => {
            return { id: product.id, quantity: product.quantity }
        })

        await toast.promise(api.post('orders', { products: order }), {
            pending: 'Realizando o seu pedido...',
            success: 'Pedido realizado com sucesso',
            error: 'Falaha ao tentar realizar o seu pedido, tente novamente'
        })
    }

    return (
        <div>
            <Container>
                <div className='container-top'>
                    <h2 className='title'>Resumo do pedido</h2>
                    <p className='items'>Itens</p>
                    <p className='items-price'>{formatCurrency(itemsSumPrice)}</p>
                    <p className='delivery-tax'>Taxa de entrega</p>
                    <p className='delivery-tax-price'>{formatCurrency(deliveryTax)}</p>
                </div>
                <div className='container-bottom'>
                    <p>Total</p>
                    <p>{formatCurrency(itemsSumPrice + deliveryTax)}</p>
                </div>
            </Container>
            <Button style={{ width: '100%', marginTop: 30 }} onClick={submitOrder}>Finalizar Pedido</Button>
        </div> // Fazer com que o botão assuma o tamanho total que ele tem disponivel (não ser alterado pela estilização do container)
    )
}