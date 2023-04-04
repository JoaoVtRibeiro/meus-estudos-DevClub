import styled from 'styled-components'

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

    ${props => props.backButton && `
        border: 1px solid #FFFFFF;
        background: transparent;   
        &:hover{
            opacity: .5;
        }
        &:active{
            opacity: .2;
        }
    `}
    
`