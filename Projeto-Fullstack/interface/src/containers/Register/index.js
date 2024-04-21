import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form' // Biblioteca react hook para tratamento de formulários
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import Logo from '../../assets/logo.svg'
import RegisterImg from '../../assets/register-image.svg'
import { Button, ErrorMessage } from '../../components'
import api from '../../services/api'
import {
    Container,
    RegisterImage,
    ContainerItens,
    Label,
    Input,
    SignInLink
} from './styles'

export function Register() {
    // Yup (Validação dos campos)
    const schema = Yup.object().shape({
        name: Yup.string().required('O seu nome é obrigatório'),
        email: Yup.string()
            .email('Digite um e-mail válido')
            .required('O e-mail é obrigatorio'),
        password: Yup.string()
            .required('A senha é obrigatoria')
            .min(6, 'A senha deve ter pelo menos 6 digitos'),
        ConfirmPassword: Yup.string()
            .required('A confirmação da senha é obrigatoria')
            .oneOf([Yup.ref('password')], 'As senhas devem ser iguais')
    })

    // Comandos e funções da biblioteca react-hook-form (Formulário)
    const {
        register, // Mapear os campos
        handleSubmit, // Enviar os dados
        formState: { errors } // Identificar os erros
    } = useForm({
        resolver: yupResolver(schema) // Validar os campos
    })

    const onSubmit = async clientData => {
        // clientData = dados dos clientes recebidos pelos inputs
        try {
            const { status } = await api.post(
                'users',
                {
                    name: clientData.name,
                    email: clientData.email,
                    password: clientData.password
                },

                { validateStatus: () => true } // validateStatus, permite que o axios retorne o status da requisição (200, 400, 409...)
            )

            if (status === 201 || status === 200) {
                toast.success('Cadastro realizado com sucesso!')
            } else if (status === 409) {
                toast.error('E-mail já cadastrado! Faça login para continuar')
            } else {
                throw new Error() // 'Forçando um erro', para que independente de qual erro seja, a leitura do código continuar no catch
            }
        } catch (err) {
            toast.error('Falha no sistema! Tente novamente')
        }
    }

    return (
        <Container>
            <RegisterImage src={RegisterImg} alt="register-image" />
            <ContainerItens>
                <img src={Logo} alt="logo-code-burger" />
                <h1>Cadastre-se</h1>

                {/* noValidate = não irá validar pelo html (sem mensagem de aviso do html nos campos) */}
                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <Label error={errors.name?.message}>Nome</Label>
                    {/* error = caso houver a mensagem, será true (para a estilização acontecer se necessário) */}
                    <Input
                        type="text"
                        {...register('name')}
                        error={errors.name?.message}
                    />
                    {/* mensagem de erro (validação pelo Yup) */}
                    <ErrorMessage>{errors.name?.message}</ErrorMessage>

                    <Label error={errors.email?.message}>Email</Label>
                    <Input
                        type="email"
                        {...register('email')}
                        error={errors.email?.message}
                    />
                    <ErrorMessage>{errors.email?.message}</ErrorMessage>

                    <Label error={errors.password?.message}>Senha</Label>
                    <Input
                        type="password"
                        {...register('password')}
                        error={errors.password?.message}
                    />
                    <ErrorMessage>{errors.password?.message}</ErrorMessage>

                    <Label error={errors.ConfirmPassword?.message}>
                        Confirmar Senha
                    </Label>
                    <Input
                        type="password"
                        {...register('ConfirmPassword')}
                        error={errors.ConfirmPassword?.message}
                    />
                    <ErrorMessage>
                        {errors.ConfirmPassword?.message}
                    </ErrorMessage>

                    <Button
                        type="submit"
                        style={{
                            marginTop: '1.56rem',
                            marginBottom: '1.56rem'
                        }}
                    >
                        Cadastrar
                    </Button>
                </form>
                <SignInLink>
                    Já possui conta?{' '}
                    <Link style={{ color: 'white' }} to="/login">
                        Fazer login
                    </Link>
                </SignInLink>
            </ContainerItens>
        </Container>
    )
}
