import styled from 'styled-components'
import { FcCheckmark, FcFullTrash } from "react-icons/fc"

export const Container = styled.div`
    background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ToDoList = styled.div`
    background: #FFFFFF;
    width: 541px;
    height: 498px;
    border-radius: 5px;
    padding: 30px 20px;

    ul {
        margin-top: 50px;
    }
`

export const Input = styled.input`
    width: 70%;
    height: 42px;
    padding: 15px 24px 11px 20px;
    border-radius: 5px;
    border: 2px;
    margin-right: 20px;
    border: 2px solid #D1D3D466;
`

export const Button = styled.button`
    width: 130px;
    height: 40px;
    padding: 10px 0px;
    border-radius: 5px;
    border: none;
    background: #8052EC;
    font-size: 17px;
    font-weight: 900;
    line-height: 2.5px;
    text-align: center;
    color: #FFFFFF;
    cursor: pointer;

    &:hover{
        background: #6531de;
    }

    &:active{
        background: #895eec;
    }
`

export const ListItemBox = styled.div`
    width: 500px;
    height: 60px;
    border-radius: 5px;
    background: ${ props => props.isFinished ? '#E8FF8B' : '#E4E4E4'};
    box-shadow: 1px 4px 10px 0px #00000033;
    font-family: Roboto;
    line-height: 17.58px;
    margin-bottom: 20px;
    padding-top: 20px;
    display: flex;
    justify-content: center;
    gap: 205px;

    li{
        list-style: none; // Remove o circulo preto que fica ao lado da li
    }
`

export const Check = styled(FcCheckmark)`
    cursor: pointer;
`

export const Trash = styled(FcFullTrash)`
    cursor: pointer;
`

export const H3 = styled.h3`
    margin-left: 168px;
`

