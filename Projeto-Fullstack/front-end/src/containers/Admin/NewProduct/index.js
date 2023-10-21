import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import ReactSelect from 'react-select'

import UploadFileIcon from '@mui/icons-material/UploadFile';
import api from '../../../services/api'
import { Container, Label, Input, LabelUpload, ButtonStyles } from './style'

function NewProduct() {
    const [fileName, setFileName] = useState(null)
    const [categories, setCategories] = useState([])
    const { register, handleSubmit, control } = useForm()

    const onSubmit = data => console.log(data)

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('categories')

            setCategories(data)
        }
        loadCategories() 
    }, [])

    return (
        <Container>
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
                <Label for="name">Nome</Label>
                <Input id="name" type="text" {...register('name')} />

                <Label for="name">Preço</Label>
                <Input id="name" type="number" {...register('price')} />

                <LabelUpload>
                    {fileName ? fileName : (
                        <>
                            <UploadFileIcon />
                            Selecione a imagem do produto
                        </>
                    )}

                    <input
                        type="file"
                        accept="image/png, image/jpeg"
                        {...register('file')}
                        onChange={value => setFileName(value.target.files[0]?.name)}
                    // '?' Elvis operator: caso ele não encontre a informação (no caso o '.name'), será ignorado essa necessidade da mesma para não quebrar o código
                    />
                </LabelUpload>

                <Controller
                    name="category_id"
                    control={control}
                    render={({ field }) => {
                        return (
                            <ReactSelect
                                {...field}
                                options={categories} // De onde será tirado as opções
                                getOptionLabel={category => category.name} // O que será mostrado
                                getOptionValue={category => category.id} // Valor que será enviado 
                                placeholder="Categoria"
                            />
                        )
                    }}
                ></Controller>

                <ButtonStyles>Adicionar Produto</ButtonStyles>
            </form>
        </Container >
    )
}

export default NewProduct


/* 
    Inputs

    Não controlados => Eles não são controlados por NINGUÉM, se viram sozinhos
    Ex: Um input que ele próprio guarda o seu valor (Auto-suficiente)

    Controlados => Eles são controlados por algum outro componente ou não são auto-suficientes
    Ex: Um input que não guarda o valor dele próprio, ele necessita guardar em uma variável


    Ambos os exemplos podem ser encontrados em front-end/src/containers/Admin/NewProducts/index.js
        - React Select: Controlado
        - Demais inputs: Não controlados

    Obs: React Hook form não funciona com inputs de terceiros (Como o react select), utilize o Controller

        - Controller: Faz uma interface entre o React hook form e o componente, no caso o React select (faz um "meio de campo" entre os dois)

*/