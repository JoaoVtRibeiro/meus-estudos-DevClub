/* 
    Padrão de nomes dos métodos do Controller

        store   => Cadastrar / Adicionar
        index   => Listar vários
        show    => LIstar apenas um
        update  => Atualizar
        delete  => Deletar
*/

import { v4 } from 'uuid'
import * as Yup from 'yup'

import User from '../models/User'

class UserController {
    async store(request, response) {
        const { name, email, password_hash, admin } = request.body

        // Validação dos dados

        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().email().required(),
            password_hash: Yup.string().required().min(6),
            admin: Yup.boolean(),
        })

        /*  if (!(await schema.isValid(request.body))) {
            return response.status(400).json({ error: 'Make sure your data is correct' })
        } */

        try {
            await schema.validateSync(request.body, { abortEarly: false })
        } catch (err) {
            return response.status(400).json({ error: err.errors })
        }

        // Validação do email (email duplicado)

        const emailVerification = await User.findOne({
            where: { email }
        })

        if(emailVerification){
            return response.status(400).json({ error: 'Email already exists'})
        }

        // Criação do Usuário

        const user = await User.create({
            id: v4(),
            name,
            email,
            password_hash,
            admin,
        })

        return response.status(201).json({ id: user.id, name, email, admin })
    }
}


export default new UserController()