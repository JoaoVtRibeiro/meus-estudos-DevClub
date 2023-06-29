/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { useForm } from 'react-hook-form' // Biblioteca react hook para tratamento de formulários

import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import BurgerLogin from '../../assets/burger-login.png'
import Logo from '../../assets/logo.png'

import { Container, BurgerLoginImage, Main, LogoImage, H1, Label, Input, Button, P } from './styles'


function Login() {
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

  const onSubmit = data => console.log(data)

  return (
    <Container>
      <figure>
        <BurgerLoginImage src={BurgerLogin} atl="login image"></BurgerLoginImage>
      </figure>

      <Main>
        <figure>
          <LogoImage src={Logo} alt="logo image"></LogoImage>
        </figure>

        <H1>Login</H1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}> {/* noValidate = não irá validar pelo html (sem mensagem de aviso do html nos campos) */}
          <Label>Email</Label>
          <Input type="email" {...register('email')}></Input>
          <p>{errors.email?.message}</p> {/* mensagem de erro (validação pelo Yup) */}

          <Label id="label-password">Senha</Label>
          <Input type="password" {...register('password')}></Input>
          <p>{errors.password?.message}</p>

          <Button type="submit">Entrar</Button>
        </form>

        <P>Não possui conta? <a>Criar conta</a></P>
      </Main>
    </Container>
  )
}

export default Login
