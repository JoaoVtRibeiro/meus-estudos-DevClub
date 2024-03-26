/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */

// Bibliotecas e frameworks
import React from 'react'
import { useForm } from 'react-hook-form' // Biblioteca react hook para tratamento de formulários
import { Link, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import { useUser } from '../../hooks/UserContext' // Pegando os dados dessa página de login para o resto da aplicação

// Api
import api from '../../services/api'

// Estilizações e componentes
import LoginImage from '../../assets/login-image.png'
import Logo from '../../assets/logo.png'
import { Button, ErrorMessage } from '../../components'
import { Container, BurgerLoginImage, Main, LogoImage, H1, Label, Input, P } from './styles'
import paths from '../../constants/path'


export function Login() {
  const history = useHistory() // useHistory (Navegação entre página)
  const { putUserData } = useUser()// Importando a variavél que vai pegar os dados dessa página de login para o resto da aplicação

  // Yup (Validação dos campos)
  const schema = Yup.object().shape({
    email: Yup.string().email('Digite um email válido').required('Digite seu email'),
    password: Yup.string().required('Digite sua senha').min(6, 'A senha deve ter no mínimo 6 digitos')
  })

  // Comandos e funções da biblioteca react-hook-form (Formulário)
  const { register, // Mapear os campos
    handleSubmit, // Enviar os dados
    formState: { errors } // Identificar os erros
  } = useForm({
    resolver: yupResolver(schema) // Validar os campos
  })

  // Ao clicar no botão
  const onSubmit = async inputsClientData => { // inputsClientData = dados dos clientes recebidos pelos inputs
    const { data } = await toast.promise( // data = uma das propriedades desse objeto (para visualizar trocar por um nome sem estar desestruturado e colocar um console.log)
      api.post('sessions', {
        email: inputsClientData.email,
        password: inputsClientData.password
      }),
      { // Toast
        pending: 'Verificando seus dados',
        success: 'Login confirmado, seja bem-vindo(a)',
        error: 'Erro, verifique seu email e senha'
      }
    )

    putUserData(data) // Passando os dados para o state do UserContext

    setTimeout(() => { // Só executa depois do tempo determinado (dar tempo para o usuário ver o toasty)
      if (data.admin) {
        history.push(paths.OrderAdm) // Redirecionamento para página de Adm
      } else {
        history.push('/') // Redirecionamento para "Home"
      }
    }, 1000) // 1 segundo

  }

  return (
    <Container>
      <figure>
        <BurgerLoginImage src={LoginImage} alt="imagem-da-pagina-de-login"></BurgerLoginImage>
      </figure>

      <Main>
        <figure>
          <LogoImage src={Logo} alt="logo"></LogoImage>
        </figure>

        <H1>Login</H1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}> {/* noValidate = não irá validar pelo html (sem mensagem de aviso do html nos campos) */}
          <Label>Email</Label>
          <Input type="email" {...register('email')} error={errors.email?.message}></Input> {/* error = caso houver a mensagem, será true (para a estilização acontecer se necessário) */}
          <ErrorMessage>{errors.email?.message}</ErrorMessage> {/* mensagem de erro (validação pelo Yup) */}

          <Label id="label-password">Senha</Label>
          <Input type="password" {...register('password')} error={errors.password?.message}></Input>
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Button type="submit" style={{ marginTop: 60 }}>Entrar</Button> {/* Primeiro {} indica que o trecho será em javascript, a segunda {} significa um objeto */}
        </form>

        <P>Não possui conta? <Link style={{ color: 'white' }} to={paths.Register}>Criar conta</Link></P>
      </Main>
    </Container>
  )
}
