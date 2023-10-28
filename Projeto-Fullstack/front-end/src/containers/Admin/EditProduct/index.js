import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import ReactSelect from 'react-select'
import { toast } from 'react-toastify'
import { useHistory } from 'react-router-dom'

import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import UploadFileIcon from '@mui/icons-material/UploadFile'

import api from '../../../services/api'
import paths from '../../../constants/path'
import { ErrorMessage } from '../../../components'
import { Container, Label, Input, LabelUpload, ButtonStyles } from './style'

function EditProduct() {
    const [fileName, setFileName] = useState(null)
    const [categories, setCategories] = useState([])
    const { push } = useHistory()

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

    const onSubmit = async data => {
        const productFormData = new FormData()

        productFormData.append('name', data.name)
        productFormData.append('price', data.price)
        productFormData.append('category_id', data.category.id)
        productFormData.append('file', data.file[0]) // Por padrão o file virá como array para receber vários arquivos (mas na aplicação está travado apenas a 1, por isso posição 0)

        await toast.promise(api.post('products', productFormData), {
            pending: 'Criando novo produto...',
            success: 'Produto criado com sucesso',
            error: 'Falha ao criar novo produto, tente novamente'
        })
     
        setTimeout(() => {
            push(paths.ListProductsAdm)
        }, 2000)
    }

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
                <div>
                    <Label for="name">Nome</Label>
                    <Input id="name" type="text" {...register('name')} />
                    <ErrorMessage>{errors.name?.message}</ErrorMessage>
                </div>

                <div>
                    <Label for="name">Preço</Label>
                    <Input id="name" type="number" {...register('price')} />
                    <ErrorMessage>{errors.price?.message}</ErrorMessage>
                </div>

                <div>
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
                </div>

                <div>
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
                </div>

                <ButtonStyles>Adicionar Produto</ButtonStyles>
            </form>
        </Container >
    )
}

export default EditProduct