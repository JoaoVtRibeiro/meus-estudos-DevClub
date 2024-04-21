import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form' // Biblioteca react hook para tratamento de formulários
import { Link, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import LoginImg from '../../assets/login-image.svg'
import Logo from '../../assets/logo.svg'
import { Button, ErrorMessage } from '../../components'
import { useUser } from '../../hooks/UserContext' // Pegando os dados dessa página de login para o resto da aplicação
import api from '../../services/api'
import {
    Container,
    LoginImage,
    ContainerItens,
    Label,
    Input,
    SignInLink
} from './styles'

export function Login() {
    const history = useHistory() // useHistory (Navegação entre página)
    const { putUserData } = useUser() // Importando a variavél que vai pegar os dados dessa página de login para o resto da aplicação

    const schema = Yup.object().shape({
        email: Yup.string()
            .email('Digite um e-mail válido')
            .required('O e-mail é obrigatorio'),
        password: Yup.string()
            .required('A senha é obrigatoria')
            .min(6, 'A senha deve ter pelo menos 6 digitos')
    })

    // Comandos e funções da biblioteca react-hook-form (Formulário)
    const {
        register, // Mapear os campos
        handleSubmit, // Enviar os dados
        formState: { errors } // Identificar os erros
    } = useForm({
        resolver: yupResolver(schema) // Validar os campos
    })

    // Ao clicar no botão
    // inputsClientData = dados dos clientes recebidos pelos inputs
    const onSubmit = async clientData => {
        // data = uma das propriedades desse objeto (para visualizar trocar por um nome sem estar desestruturado e colocar um console.log)
        const { data } = await toast.promise(
            api.post('sessions', {
                email: clientData.email,
                password: clientData.password
            }),
            // Toast
            {
                pending: 'Verificando seus dados',
                success: 'Seja bem-vindo(a)',
                error: 'Verifique seu e-mail e senha 🤯'
            }
        )

        putUserData(data) // Passando os dados para o state do UserContext

        // Só executa depois do tempo determinado (dar tempo para o usuário ver o toasty)
        setTimeout(() => {
            if (data.admin) {
                history.push('/pedidos') // Redirecionamento para página de Adm
            } else {
                history.push('/') // Redirecionamento para "Home"
            }
        }, 1000) // 1 segundo
    }

    return (
        <Container>
            <LoginImage src={LoginImg} alt="login-image" />
            <ContainerItens>
                <img src={Logo} alt="logo-code-burger" />
                <h1>Login</h1>

                {/* noValidate = não irá validar pelo html (sem mensagem de aviso do html nos campos) */}
                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <Label>Email</Label>
                    {/* error = caso houver a mensagem, será true (para a estilização acontecer se necessário) */}
                    <Input
                        type="email"
                        {...register('email')}
                        error={errors.email?.message}
                    />
                    {/* mensagem de erro (validação pelo Yup) */}
                    <ErrorMessage>{errors.email?.message}</ErrorMessage>

                    <Label>Senha</Label>
                    <Input
                        type="password"
                        {...register('password')}
                        error={errors.password?.message}
                    />
                    <ErrorMessage>{errors.password?.message}</ErrorMessage>

                    <Button
                        type="submit"
                        style={{
                            marginTop: '4.68rem',
                            marginBottom: '1.56rem'
                        }}
                    >
                        {/* As primeiras {} indica que o trecho será em javascript, a segunda {} significa um objeto */}
                        Entrar
                    </Button>
                </form>
                <SignInLink>
                    Não possui conta?{' '}
                    <Link style={{ color: 'white' }} to="/cadastro">
                        Criar conta
                    </Link>
                </SignInLink>
            </ContainerItens>
        </Container>
    )
}
