/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'

import BurgerLogin from '../../assets/burger-login.png'
import Logo from '../../assets/logo.png'

import { Container, Figure, BurgerLoginImage, Main, H1, Label, Input, Button, P } from './styles'


function Login() {
  return (
    <Container>
      <Figure>
        <BurgerLoginImage src={BurgerLogin} atl="login image"></BurgerLoginImage>
      </Figure>

      <Main>
        <Figure>
          <img src={Logo} alt="logo image"></img>
        </Figure>

        <H1>Login</H1>

        <Label>Email</Label>
        <Input></Input>

        <Label>Senha</Label>
        <Input></Input>

        <Button>Entrar</Button>

        <P>Não possui conta? <a>Sign Up</a></P>
      </Main>
    </Container>
  )
}

export default Login
