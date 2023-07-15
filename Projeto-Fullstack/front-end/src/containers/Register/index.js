/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */

// Bibliotecas e frameworks
import React from 'react'
import { useForm } from 'react-hook-form' // Biblioteca react hook para tratamento de formulários
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

// Api
import api from '../../services/api'

// Estilizações e componentes
import RegisterImage from '../../assets/register-image.png'
import Logo from '../../assets/logo.png'
import Button from '../../components/Button'
import { Container, BurgerRegisterImage, Main, LogoImage, H1, Label, Input, ErrorMessage, P } from './styles'


function Login() {
  // Yup (Validação dos campos)

  const schema = Yup.object().shape({
    name: Yup.string().required('Digite seu nome'),
    email: Yup.string().email('Digite um email válido').required('Digite seu email'),
    password: Yup.string().required('Digite sua senha').min(6, 'A senha deve ter no mínimo 6 digitos'),
    confirmPassword: Yup.string().required('Confirme sua senha').oneOf([Yup.ref('password')], 'As senha devem ser iguais')
  })

  // Comandos e funções da biblioteca react-hook-form (Formulário)
  const { register, // Mapear os campos
    handleSubmit, // Enviar os dados
    formState: { errors } // Identificar os erros
  } = useForm({
    resolver: yupResolver(schema) // Validar os campos
  })

  const onSubmit = async inputsClientData => { // inputsClientData = dados dos clientes recebidos pelos inputs
    try {
      const { status } = await api.post('users', {
        name: inputsClientData.name,
        email: inputsClientData.email,
        password: inputsClientData.password
      },
        { validateStatus: () => true }) // validateStatus, permite que o axios retorne o status da requisição (200, 400, 409...)

      if(status === 201 || status === 200){
        toast.success('Cadastrado com sucesso!')
      } else if(status === 409){
        toast.error('Email já cadastrado! Faça login para continuar')
      } else {
        throw new Error() // 'Forçando um erro', para que independente de qual erro seja, a leitura do código continuar no catch
      }
    } catch (err) {
      toast.error('Falha no sistema, tente novamente')
    }
  }

  return (
    <Container>
      <figure>
        <BurgerRegisterImage src={RegisterImage} atl="login image"></BurgerRegisterImage>
      </figure>

      <Main>
        <figure>
          <LogoImage src={Logo} alt="logo image"></LogoImage>
        </figure>

        <H1>Cadastre-se</H1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}> {/* noValidate = não irá validar pelo html (sem mensagem de aviso do html nos campos) */}
          <Label error={errors.name?.message}>Nome</Label>
          <Input type="text" {...register('name')} error={errors.name?.message}></Input> {/* error = caso houver a mensagem, será true (para a estilização acontecer se necessário) */}
          <ErrorMessage>{errors.name?.message}</ErrorMessage> {/* mensagem de erro (validação pelo Yup) */}

          <Label error={errors.email?.message}>Email</Label>
          <Input type="email" {...register('email')} error={errors.email?.message}></Input>
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label error={errors.password?.message}>Senha</Label>
          <Input type="password" {...register('password')} error={errors.password?.message}></Input>
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Label error={errors.confirmPassword?.message}>Confirmar Senha</Label>
          <Input type="password" {...register('confirmPassword')} error={errors.confirmPassword?.message}></Input>
          <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

          <Button type="submit" style={{ marginTop: 20 }}>Cadastrar</Button>
        </form>

        <P>Já possui conta? <Link style={{color: 'white'}} to="/login">Fazer login</Link></P>
      </Main>
    </Container>
  )
}

export default Login
