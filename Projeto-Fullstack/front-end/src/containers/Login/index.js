/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { useForm } from 'react-hook-form' // Biblioteca react hook para tratamento de formulários

import BurgerLogin from '../../assets/burger-login.png'
import Logo from '../../assets/logo.png'

import { Container, BurgerLoginImage, Main, LogoImage, H1, Label, Input, Button, P } from './styles'


function Login() {
  // Comandos e funções da biblioteca react-hook-form
  const { register, handleSubmit, formState: { errors } } = useForm()

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

        <form onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>
          <Input type="email" { ... register('email')}></Input>

          <Label id="label-password">Senha</Label>
          <Input type="password" { ... register('password')}></Input>

          <Button type="submit">Entrar</Button>
        </form>

        <P>Não possui conta? <a>Criar conta</a></P>
      </Main>
    </Container>
  )
}

export default Login
