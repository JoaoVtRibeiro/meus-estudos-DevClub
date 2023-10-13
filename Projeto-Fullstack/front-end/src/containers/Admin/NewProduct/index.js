import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import ReactSelect from 'react-select'

import api from '../../../services/api'
import Button from '../../../components'
import { Container, Label, Input } from './style'

function NewProduct() {
    const { register, handleSubmit } = useForm()
    const onSubmit = data => console.log(data)


    useEffect(() => {
        async function loadOrders() {
            const { data } = await api.get('products')
        }

        loadOrders()
    }, [])

    return (
        <Container>
            <form noValidate>
                <Label for="name">Nome</Label>
                <Input id="name" type="text" {...register('name')} />

                <Label for="name">Preço</Label>
                <Input id="name" type="number" {...register('price')} />

                <Label for="name">Upload da imagem</Label>
                <Input id="name" type="file" accept="image/png, image/jpeg" />

                <ReactSelect />

                <Button></Button>
            </form>
        </Container>
    )
}

export default NewProduct