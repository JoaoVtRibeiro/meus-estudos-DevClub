/* 
    Padrão de nomes dos métodos do Controller

        store   => Cadastrar / Adicionar
        index   => Listar vários
        show    => Listar apenas um
        update  => Atualizar
        delete  => Deletar
*/

import { v4 } from 'uuid'
import * as Yup from 'yup' // Biblioteca que auxilia com validação de dados

import User from '../models/User'

class UserController {
    async store(request, response) {
        
        // Validação dos dados - Yup
        
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().email().required(),
            password: Yup.string().required().min(6),
            admin: Yup.boolean()
        })

        /* if (!(await schema.isValid(request.body))) { // Validação geral (mesma mensagem para qualquer erro) 
            return response.status(400).json({ error: 'Make sure your data is correct' })
        } */
        
        try { // Validação por erro em especifico (mensagem mostra qual campo está incorreto)       
            await schema.validateSync(request.body, { abortEarly: false })
        } catch (err) {
            return response.status(400).json({ error: err.errors })
        }

        // Validação do email (email duplicado)

        const { name, email, password, admin } = request.body
        
        const userExists = await User.findOne({
            where: { email }
        })

        if (userExists) {
            return response.status(409).json({ error: 'User already exists' })
        }

        // Criação do Usuário

        const user = await User.create({
            id: v4(),
            name,
            email,
            password,
            admin
        })

        return response.status(201).json({ id: user.id, name, email, admin })
    }
}

export default new UserController()
