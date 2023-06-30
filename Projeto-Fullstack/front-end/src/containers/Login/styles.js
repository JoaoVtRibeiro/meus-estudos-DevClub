import styled from 'styled-components'

// Divs

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    overflow: hidden; /* impede barras de rolagem */
`
export const Main = styled.main`
    background-color: #373737;
    height: 100%;
    width: 100vw;
    display: flex;
    flex-direction: column;
    padding-left: 104px;
    justify-content: center;

    form {
        display: flex;
        flex-direction: column;
    }
`

// Elementos

export const BurgerLoginImage = styled.img`
    height: 100%;
`

export const LogoImage = styled.img`
    position: fixed;
    top: 84px;
    padding-left: 30px;
`

export const H1 = styled.h1`
    color: #FFF;
    font-size: 24px;
    font-weight: 500;
    text-align: center;
    margin-top: 320px;
    margin-bottom: 25px;
    padding-right: 90px;
`

export const Label = styled.label`
    color: #FFF;
    font-size: 12px;
    font-weight: 500;
    &#label-password{
        margin-top: 20px;
    }
`

export const Input = styled.input`
    width: 391px;
    height: 38px;
    border: ${ props => props.error ? '2px solid #CC1717' : 'none'}; // props : propriedades do elemento
    border-radius: 5px;
    box-shadow: 3px 3px 10px 0px rgba(74, 144, 226, 0.19);
    margin-top: 7px;
    padding-left: 12px;
`

export const ErrorMessage = styled.p `
    color: #CC1717;
    font-size: 14px;
    font-weight: 400;
    margin-top: 2px;
`

export const Button = styled.button`
    width: 182px;
    height: 36px;
    background-color: #9758A6;
    color: #EEE;
    text-align: center;
    font-size: 16px;
    font-family: Poppins;
    font-weight: 500;
    border-radius: 40px;
    border: none; 
    cursor: pointer;
    margin-top: 60px;
    &:hover{
        background-color: #8D529C;
    }
    &:active{
        background-color: #A25FB3;
    }
`

export const P = styled.p`
    color: #FFF;
    font-size: 14px;
    margin-top: 30px;
    a{
        text-decoration: underline;
        cursor: pointer;
    }
`
