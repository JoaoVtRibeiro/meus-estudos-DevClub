// Importando Biblioteca
import styled from "styled-components"

// Importanando imagens do fundo
import Background from './assets/Log_in/background-login.png'


// componente : export const nome = styled.tag 

export const Body = styled.body`
    width: 100%;
    height: 100%;
`

export const Container = styled.div`
    background: url('${Background}'); // url utilizando a imagem importada
    background-size: cover; // por padrão a imagem se repete, cover estica a imagem
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    height: 100%;  
`
export const Figure = styled.figure`
    margin-top: 30px;
`

export const Main = styled.main`
    background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
    border-radius: 61px 61px 0px 0px;
    display: flex;
    flex-direction: column;
    padding: 50px 36px;
    height: 100%;
`

export const H1 = styled.h1`
    font-size: 34px;
    line-height: 40px;
    text-align: center;
    color: #FFFFFF;
    margin-top: 11px;
    margin-bottom: 70px;
`
export const Label = styled.label`
    font-size: 18px;
    line-height: 22px;
    letter-spacing: -0.408px;
    color: #EEEEEE;
    padding-left: 25px;
`
export const Input = styled.input`
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;
    background: rgba(255, 255, 255, 0.25);
    border: none;
    outline: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px; 
    width: 342px;
    height: 58px;
    padding-left: 25px;
    margin-bottom: 34px;
    &::placeholder{
        color: #FFFFFF;
        opacity: .6;
    }
`
export const Button = styled.button`
    font-size: 17px;
    line-height: 28px;
    color: #FFFFFF;
    border: none;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 14px;
    width: 342px;
    height: 74px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 26px;
    &:hover{
        opacity: .8;
    }
    &:active{
        opacity: .6;
    }
`
export const User = styled.li`
    margin-top: 25px;
    width: 342px;
    height: 58px;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 14px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    p{
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        color: #FFFFFF;
    }

    button{
        background: none;
        border: none;
        cursor: pointer;
    }
`