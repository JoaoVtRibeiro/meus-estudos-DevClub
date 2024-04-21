import jwt from 'jsonwebtoken'
import authConfg from '../../config/auth'

export default (request, response, next) => {
    const authToken = request.headers.authorization

    if (!authToken) {
        return response.status(401).json({ error: 'Token not provided' })
    }

    const token = authToken.split(' ')[1] // Separando o token do bearer

    try {
        jwt.verify(token, authConfg.secret, function (err, decoded) { // .verify(token, secret, função(erro e dados do usuario do token)
            if (err) {
                throw new Error() // Comando que "força" um erro, para cair no catch
            }

            request.userId = decoded.id
            request.userName = decoded.name

            return next()
        })
    } catch (err) {
        return response.status(401).json({ error: 'Token is invalid' })
    }
}

/* Observações: 
    - secret é a string criptografada no arquivo SessionController.js

    - os atributos que decoded possui são: dados do usúario do token (criptografados), data de criação e data de experição
*/
