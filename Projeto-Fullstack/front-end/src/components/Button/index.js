import React from 'react'

import { Button } from './styles'

export function Buttons({ children, ...props }) {
    return <Button {...props}>{children}</Button>
}