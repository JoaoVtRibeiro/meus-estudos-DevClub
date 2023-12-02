import { Router } from 'express'

import packageJson from '../../package.json'

export const baseRoutes = Router()

baseRoutes.get('/', (_, response) => { // _ significa que a propriedade não será utilizada (no caso o request)
    const { name, version, description, author } = packageJson

    response.status(200).json({ name, version, description, author})
})