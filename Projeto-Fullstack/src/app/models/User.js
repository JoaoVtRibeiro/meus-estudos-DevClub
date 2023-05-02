import Sequelize, { Model } from 'sequelize'

class User extends Model {
    static init(sequelize){ // static faz com que o método possa ser usar sem a necessidade de instanciar a classe
        super.init( // super permite utilizar os métodos da classe que foi extendida
            {
                name: Sequelize.STRING,
                email: Sequelize.STRING,
                password_hash: Sequelize.STRING,
                admin: Sequelize.BOOLEAN,
            },
            {
                sequelize,
            }
        )
    }
}

export default User