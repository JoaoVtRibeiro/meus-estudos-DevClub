import { yupResolver } from '@hookform/resolvers/yup'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import ReactSelect from 'react-select'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import { ErrorMessage } from '../../../components'
import api from '../../../services/api'
import {
    Container,
    Label,
    Input,
    ButtonStyles,
    LabelUpload,
    ContainerInput
} from './styles'

function EditProduct() {
    const [fileName, setFileName] = useState(null)
    const [categories, setCategories] = useState([])
    // Desestruturação: location -> state -> product
    // location: terá o pathname(path atual) e state com o product enviado de ListProducts
    const {
        push,
        location: {
            state: { product }
        }
    } = useHistory()

    const schema = Yup.object().shape({
        name: Yup.string().required('Digite o nome do produto'),
        price: Yup.string().required('Digite o preço do produto'), // por mais que o price seja um número ele vem como uma string
        category: Yup.object().required('Escolha uma categoria'),
        offer: Yup.bool()
    })

    const {
        register,
        handleSubmit,
        control,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = async data => {
        const productDataFormData = new FormData()

        productDataFormData.append('name', data.name)
        productDataFormData.append('price', data.price)
        productDataFormData.append('category_id', data.category.id)
        productDataFormData.append('file', data.file[0]) // Por padrão o file virá como array para receber vários arquivos (mas na aplicação está travado apenas a 1, por isso posição 0)
        productDataFormData.append('offer', data.offer)

        await toast.promise(
            api.put(`products/${product.id}`, productDataFormData),
            {
                pending: 'Editando novo produto...',
                success: 'Produto editado com sucesso',
                error: 'Falha ao editar produto'
            }
        )

        setTimeout(() => {
            push('/listar-produtos')
        }, 2000)
    }

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('categories')

            console.log(data)
            setCategories(data)
        }

        loadCategories()
    }, [])

    return (
        <Container>
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <Label>Nome</Label>
                    <Input
                        type="text"
                        {...register('name')}
                        defaultValue={product.name}
                    />
                    <ErrorMessage>{errors.name?.message}</ErrorMessage>
                </div>

                <div>
                    <Label>Preço</Label>
                    <Input
                        type="number"
                        {...register('price')}
                        defaultValue={product.price}
                    />
                    <ErrorMessage>{errors.price?.message}</ErrorMessage>
                </div>

                <div>
                    <LabelUpload>
                        {fileName || (
                            <>
                                <CloudUploadIcon />
                                Carregue a imagem do produto
                            </>
                        )}

                        <input
                            type="file"
                            accept="image/png, image/jpeg"
                            {...register('file')}
                            onChange={value => {
                                // '?' Elvis operator: caso ele não encontre a informação (no caso o '.name'), será ignorado essa necessidade para não quebrar o código
                                setFileName(value.target.files[0]?.name)
                            }}
                        />
                    </LabelUpload>
                    <ErrorMessage>{errors.file?.message}</ErrorMessage>
                </div>

                <div>
                    <Controller
                        name="category"
                        control={control}
                        defaultValue={product.category}
                        render={({ field }) => {
                            return (
                                <ReactSelect
                                    {...field}
                                    options={categories} // De onde será tirado as opções
                                    getOptionLabel={cat => cat.name} // O que será mostrado
                                    getOptionValue={cat => cat.id} // Valor que será enviado
                                    placeholder="...Escolha a categoria"
                                    defaultValue={product.category}
                                />
                            )
                        }}
                    ></Controller>
                    <ErrorMessage>{errors.category?.message}</ErrorMessage>
                </div>

                <ContainerInput>
                    <input
                        type="checkbox"
                        {...register('offer')}
                        defaultChecked={product.offer}
                    />
                    <Label>Produto em oferta?</Label>
                </ContainerInput>

                <ButtonStyles>Editar produto</ButtonStyles>
            </form>
        </Container>
    )
}

export default EditProduct
