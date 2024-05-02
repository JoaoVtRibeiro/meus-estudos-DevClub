import { ButtonRed, ButtonWhite } from './styles'

function Button({ children, red, white, ...rest }) { // {} -> importando um valor com o nome exato
    return (
        <>
            { // {} -> indica que será javascript
                red && (
                    <ButtonRed {...rest}>{children}</ButtonRed>
                )
            }
            
            {
                white && (
                    <ButtonWhite {...rest}>{children}</ButtonWhite>
                )
            }</>

    )
}

export default Button

/* 
    children é o nome padrão no react para a prop que contém
    o conteúdo do elemento (o texto no meio de uma tag button)

    <button>texto</button> children=texto
*/