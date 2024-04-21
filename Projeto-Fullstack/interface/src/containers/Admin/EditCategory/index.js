import { yupResolver } from '@hookform/resolvers/yup'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import { ErrorMessage } from '../../../components'
import api from '../../../services/api'
import { Container, Label, Input, ButtonStyles, LabelUpload } from './styles'

function EditCategory() {
    const [fileName, setFileName] = useState(null)
    const {
        push,
        location: {
            state: { categorie }
        }
    } = useHistory()

    const schema = Yup.object().shape({
        name: Yup.string().required('Digite o nome da categoria')
    })

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = async data => {
        const categoryDataFormData = new FormData()

        categoryDataFormData.append('name', data.name)
        categoryDataFormData.append('file', data.file[0])

        await toast.promise(
            api.put(`/categories/${categorie.id}`, categoryDataFormData),
            {
                pedding: 'Editando categoria...',
                success: 'Categoria editada com sucesso',
                error: 'Falha ao editar categoria'
            }
        )

        setTimeout(() => {
            push('/categorias')
        }, 2000)
    }

    return (
        <Container>
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <Label>Nome</Label>
                    <Input
                        type="text"
                        {...register('name')}
                        defaultValue={categorie.name}
                    />
                    <ErrorMessage>{errors.name?.message}</ErrorMessage>
                </div>

                <div>
                    <LabelUpload>
                        {fileName || (
                            <>
                                <CloudUploadIcon />
                                Carregue a imagem da categoria
                            </>
                        )}

                        <input
                            type="file"
                            accept="image/png, image/jpeg, image/svg"
                            {...register('file')}
                            onChange={value => {
                                setFileName(value.target.files[0]?.name)
                            }}
                        />
                    </LabelUpload>
                    <ErrorMessage>{errors.file?.message}</ErrorMessage>
                </div>

                <ButtonStyles>Editar Categoria</ButtonStyles>
            </form>
        </Container>
    )
}

export default EditCategory
