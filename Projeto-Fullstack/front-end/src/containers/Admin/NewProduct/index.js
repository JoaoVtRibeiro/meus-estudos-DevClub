import React, { useEffect, useState } from 'react'

import api from '../../../services/api'
import { Container } from './style'

function NewProduct() {
    useEffect(() => {
        async function loadOrders() {
            const { data } = await api.get('products')
        }

        loadOrders()
    }, [])

    return (
        <Container>
            
        </Container>
    )
}

export default NewProduct