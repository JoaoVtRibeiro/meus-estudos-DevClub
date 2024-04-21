import Sequelize, { Model } from 'sequelize'
import bcrypt from 'bcrypt'

class User extends Model {
    static init(sequelize) { // static faz com que o método possa ser usado sem a necessidade de instanciar a classe
        super.init( // super permite utilizar os métodos da classe que foi extendida
            {
                name: Sequelize.STRING,
                email: Sequelize.STRING,
                password: Sequelize.VIRTUAL, // Campos virtuais só existem dentro da aplicação
                password_hash: Sequelize.STRING,
                admin: Sequelize.BOOLEAN
            },
            {
                sequelize // configDatabase (database/index.js)
            }
        )
    
        this.addHook('beforeSave', async (user) => { // Ação do Sequelize que pega os dados do "password" e os criptografa, para ser o valor de "password_hash"
            if (user.password) {
                user.password_hash = await bcrypt.hash(user.password, 10) // bcrypt.hash(campo a ser criptografado, "força" da criptografia)
            }
        })

        return this
    }

    checkPassword(password) {
        return bcrypt.compare(password, this.password_hash) // comparando se a senha enviada bate com a senha criptografada
    }
}

export default User
