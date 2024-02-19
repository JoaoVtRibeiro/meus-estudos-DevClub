import React from 'react'

import { Buttons } from './styles'

export function Button({ children, ...props }) {
    return <Buttons {...props}>{children}</Buttons>
}