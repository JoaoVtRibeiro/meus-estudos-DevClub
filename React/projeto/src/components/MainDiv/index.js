import React from 'react'
import { Main } from './styles'

function MainDiv({children, withBlur}) {
    return <Main withBlur={withBlur}>{children}</Main>
}

export default MainDiv