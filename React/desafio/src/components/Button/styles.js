import styled from "styled-components";

export const Button = styled.button`
    width: 342px;
    height: 68px;
    background: #D93856;
    font-weight: 900;
    font-size: 17px;
    line-height: 2px;
    text-align: center;
    cursor: pointer;
    &:hover{
    background: #F23F60;
    }
    &:active{
        opacity: .8;
    }
    ${props => props.backButton && `
     background: rgba(255, 255, 255, 0.14);
     &:hover{
    background: rgba(255, 255, 255, 0.24);
    }
    &:active{
        opacity: .8;
    }
     `}
`