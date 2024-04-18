import PropTypes from 'prop-types'
import React from 'react'

import { Buttons } from './styles'

export function Button({ children, ...props }) {
    return <Buttons {...props}>{children}</Buttons>
}

Button.propTypes = {
    children: PropTypes.string
}