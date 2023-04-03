// Importando Biblioteca
import styled from "styled-components"


// Importanando imagens do fundo
import Background from '../../assets/Log_in/background-login.png'


// componente : export const nome = styled.tag 

export const Container = styled.div`
    background: url('${Background}'); // url utilizando a imagem importada
    background-size: cover; // por padrão a imagem se repete, cover estica a imagem
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    height: 100%;
    min-height: 100vh;
`
export const Figure = styled.figure`
    display:flex;
    margin-top: 10px;
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
    margin-top: 60px;
    &:hover{
        opacity: .8;
    }
    &:active{
        opacity: .6;
    }
`