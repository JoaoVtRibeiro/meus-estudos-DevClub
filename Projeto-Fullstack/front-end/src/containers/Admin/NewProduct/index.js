import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import ReactSelect from 'react-select'

import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import UploadFileIcon from '@mui/icons-material/UploadFile'

import api from '../../../services/api'
import { ErrorMessage } from '../../../components'
import { Container, Label, Input, LabelUpload, ButtonStyles } from './style'

function NewProduct() {
    const [fileName, setFileName] = useState(null)
    const [categories, setCategories] = useState([])

    const schema = Yup.object().shape({
        name: Yup.string().required('Digite o nome do produto'),
        price: Yup.string().required('Digite o preço do produto'), // por mais que o price seja um número ele vem como uma string
        category: Yup.object().required('Escolha uma categoria'),
        file: Yup.mixed().test('required', 'Carregue uma imagem', value => { // .test('nome do teste', 'mensagem de erro', teste em si)
            return value?.length > 0
        }).test('fileSize', 'Carregue um arquivo de até 2mb', value => {
            return value[0]?.size <= 200000
        }).test('type', 'Carregue um arquivo JPEG ou PNG', value => {
            return value => value[0]?.type === 'image/jpeg' || value[0]?.type === 'image/png'
        })
    })

    const {
        register,
        handleSubmit,
        control,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    })

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
                <ErrorMessage>{errors.name?.message}</ErrorMessage>

                <Label for="name">Preço</Label>
                <Input id="name" type="number" {...register('price')} />
                <ErrorMessage>{errors.price?.message}</ErrorMessage>

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
                <ErrorMessage>{errors.file?.message}</ErrorMessage>

                <Controller
                    name="category"
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
                <ErrorMessage>{errors.category?.message}</ErrorMessage>

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


    Obs: React Hook form não funciona com inputs de terceiros (Como o react select), utilize o Controller para auxiliar com esses tipos de inputs

        - Controller: Faz uma interface entre o React hook form e o componente, no caso o React select (faz um "meio de campo" entre os dois)

*/