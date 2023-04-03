import styled from "styled-components";

export const Main = styled.main`
    background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
    border-radius: 61px 61px 0px 0px;
    display: flex;
    flex-direction: column;
    padding: 50px 36px;
    min-height: calc(100vh - 177px - 10px - 25px); // 100vh - altura da imagem - margin figure - gap container

    ${props => props.withBlur && `
        min-height: calc(100vh - 100px - 20px - 40px); // 100vh - altura da imagem - margin figure - gap container
        backdrop-filter: blur(22.5px);
    `}    
`