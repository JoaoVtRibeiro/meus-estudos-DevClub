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
import { Container, Label, Input, ButtonStyles, LabelUpload } from './styles'

function NewProduct() {
    const [fileName, setFileName] = useState(null)
    const [categories, setCategories] = useState([])
    const { push } = useHistory()

    const schema = Yup.object().shape({
        name: Yup.string().required('Digite o nome do produto'),
        price: Yup.string().required('Digite o preço do produto'), // por mais que o price seja um número ele vem como uma string
        category: Yup.object().required('Escolha uma categoria'),
        file: Yup.mixed()
            // .test('nome do teste', 'mensagem de erro', teste em si)
            .test('required', 'Carregue um arquivo', value => {
                return value?.length > 0
            })
            .test('fileSize', 'Carregue um arquivo de até 2mb', value => {
                return value[0]?.size <= 1500000
            })
            .test('type', 'Carregue apenas arquivos JPEG ou PNG', value => {
                return (
                    value[0]?.type === 'image/jpeg' ||
                    value[0]?.type === 'image/png'
                )
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
        const productDataFormData = new FormData()

        productDataFormData.append('name', data.name)
        productDataFormData.append('price', data.price)
        productDataFormData.append('category_id', data.category.id)
        productDataFormData.append('file', data.file[0]) // Por padrão o file virá como array para receber vários arquivos (mas na aplicação está travado apenas a 1, por isso posição 0)

        await toast.promise(api.post('products', productDataFormData), {
            pending: 'Criando novo produto...',
            success: 'Produto criado com sucesso',
            error: 'Falha ao criar produto'
        })

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
                    <Input type="text" {...register('name')} />
                    <ErrorMessage>{errors.name?.message}</ErrorMessage>
                </div>

                <div>
                    <Label>Preço</Label>
                    <Input type="number" {...register('price')} />
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
                                // '?' Elvis operator: caso ele não encontre a informação (no caso o '.name'), será ignorado essa necessidade da mesma para não quebrar o código
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
                        render={({ field }) => {
                            return (
                                <ReactSelect
                                    {...field}
                                    options={categories} // De onde será tirado as opções
                                    getOptionLabel={cat => cat.name} // O que será mostrado
                                    getOptionValue={cat => cat.id} // Valor que será enviado
                                    placeholder="...Escolha a categoria"
                                />
                            )
                        }}
                    ></Controller>
                    <ErrorMessage>{errors.category?.message}</ErrorMessage>
                </div>

                <ButtonStyles>Adicionar produto</ButtonStyles>
            </form>
        </Container>
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
