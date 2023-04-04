import React from 'react'
import { Button } from './styles'

function Buttons({ children, ...props }) { // ...nomequalquer manda todas as propriedades 
    return <Button {...props}>{children}</Button>
}

export default Buttons