import * as Yup from 'yup'

import User from '../models/User'

class SessionController {
    async store(request, response) {
        const { email, password } = request.body

        // Validação dos dados

        /* const userEmailOrPasswordIncorrect = () => { //  -----  Entender o erro depois ---------
            return response.status(401).json({ error: 'Make sure your email or password are correct' })
        } */

        const schema = Yup.object().shape({
            email: Yup.string().email().required(),
            password: Yup.string().required(),
        })

        if (!(await schema.isValid(request.body))) { // Verificação da escrita dos dados em cada campo
            return response.status(401).json({ error: 'Make sure your email or password are correct' })
        }

        const user = await User.findOne({
            where: { email },
        })

        if (!user) { // Verificação se o email existe do banco de dados
            return response.status(401).json({ error: 'Make sure your email or password are correct' })
        } 

        if (!(await user.checkPassword(password))) { // Verificação se a senha corresponde ao email
            return response.status(401).json({ error: 'Make sure your email or password are correct' })
        } 

        return response.json({ id: user.id, email, name: user.name, admin: user.admin })
    }
}

export default new SessionController() 