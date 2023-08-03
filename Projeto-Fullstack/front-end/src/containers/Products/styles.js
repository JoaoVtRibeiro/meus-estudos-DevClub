import styled from 'styled-components'

export const Container =  styled.div``

export const ProductsImg = styled.img`
    width: 100%;
`

export const CategoriesMenu = styled.div`
    display: flex; // Display que auxilia com alinhamentos
    justify-content: center;
    gap: 50px;
    margin-top: 20px;
`

export const CategoryButton = styled.button`
    cursor: pointer;
    background: none;
    border: none;
    border-bottom: ${props => props.isActiveCategory && '2px solid #9758A6'}; // && = if sem o else (só vai ser aplicado se isActiveCategory for verdadeiro)
    padding-bottom: 5px;
    color: ${props => props.isActiveCategory ? '#9758A6' : '#9a9a9d'};
    font-size: 17px;
    line-height: 20px;
`

export const ProductsContainer = styled.div``