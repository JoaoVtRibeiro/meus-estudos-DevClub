import styled from 'styled-components'

export const Container = styled.div`
    height: 72px;
    background: #ffffff;
    box-shadow: 2px 3px 5px rgba(0,0,0, 0.15);
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
`

export const LeftDiv = styled.div`
    display: flex;
    gap: 30px;
`

export const PageLink = styled.a`
    cursor: pointer;
    text-decoration: none;
    color: ${ props => (props.isActive ? '#9758A6' : '#555555')};
    font-size: 16px;
    line-height: 19px;
    font-weight: ${ props => (props.isActive ? 'bold' : 'normal')};
`

export const RightDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`

export const Line = styled.div`
    height: 40px;
    border: 0.5px solid #bababa;
`

export const UserDiv = styled.div`
    p{
        font-weight: 300;
        font-size: 14px;
        line-height: 16px;
        color: #555555;
    }
`

export const LogOutLink = styled.a`
        font-weight: bold;
        font-size: 14px;
        line-height: 16px;
        cursor: pointer;
        color: #9758a6;
`

