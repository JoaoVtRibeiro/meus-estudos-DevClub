import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import ReactSelect from 'react-select'

import UploadFileIcon from '@mui/icons-material/UploadFile';
import api from '../../../services/api'
import { Container, Label, Input, LabelUpload, ButtonStyles } from './style'

function NewProduct() {
    const [fileName, setFileName] = useState(null)
    const [categories, setCategories] = useState([])
    const { register, handleSubmit } = useForm()
    const onSubmit = data => console.log(data)


    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('categories')
        }

        loadCategories()
    }, [])

    return (
        <Container>
            <form noValidate>
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

                <ReactSelect 
                    options={categories} // De onde será tirado as opções
                    getOptionLabel={category => category.name} // O que será mostrado
                    getOptionValue={category => category.id} // Valor que será enviado
                    placeholder="Categoria"
                />

                <ButtonStyles>Adicionar Produto</ButtonStyles>
            </form>
        </Container>
    )
}

export default NewProduct