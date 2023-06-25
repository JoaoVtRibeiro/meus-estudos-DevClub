/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'

import BurgerLogin from '../../assets/burger-login.png'
import Logo from '../../assets/logo.png'

import { Container, BurgerLoginImage, Main, LogoImage, H1, Label, Input, Button, P } from './styles'


function Login() {
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

        <Label>Email</Label>
        <Input></Input>

        <Label id="label-password">Senha</Label>
        <Input></Input>

        <Button>Entrar</Button>

        <P>Não possui conta? <a>Criar conta</a></P>

      </Main>
    </Container>
  )
}

export default Login
