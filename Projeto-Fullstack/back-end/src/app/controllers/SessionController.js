import * as Yup from 'yup'
import jwt from 'jsonwebtoken'

import User from '../models/User'
import authConfig from '../../config/auth'

class SessionController {
    async store(request, response) {
        
        // Validação dos dados - Yup

        /* const userEmailOrPasswordIncorrect = () => { //  -----  Entender o erro depois (tentar criar como function normal talvez?) ---------
            return response.status(401).json({ error: 'Make sure your email or password are correct' })
        } */

        const schema = Yup.object().shape({
            email: Yup.string().email().required(),
            password: Yup.string().required(),
        })

        if (!(await schema.isValid(request.body))) { // Verificação da escrita dos dados em cada campo
            return response.status(401).json({ error: 'Make sure your email or password are correct' })
        }

        // Validação dos dados - conferindo se existe no Banco de dados

        const { email, password } = request.body

        const user = await User.findOne({
            where: { email },
        })

        if (!user) { // Verificação se o email existe do banco de dados
            return response.status(401).json({ error: 'Make sure your email or password are correct' })
        }

        if (!(await user.checkPassword(password))) { // Verificação se a senha corresponde ao email
            return response.status(401).json({ error: 'Make sure your email or password are correct' })
        }

        return response.json({
            id: user.id,
            email,
            name: user.name,
            admin: user.admin,
            token: jwt.sign({ id: user.id, name: user.name }, authConfig.secret, { expiresIn: authConfig.expiresIn, }) 
            // jwt.sign(info do usuário, string criptografa (ex: em md5 hash), periodo para o token expirar)
        })
    }
}

export default new SessionController() 