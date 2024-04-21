module.exports = {
    dialect: 'postgres', // Banco de dados que será utilizado
    host: 'localhost',
    username: 'postgres',
    password: 'postgres',
    database: 'codeburger',
    define: { // Definições 
        timespamps: true, // Preenche automaticamente campos adicionais, "created_at" (data de criação) e "updated_at" (data de atualização)
        underscored: true,
        underscoredAll: true
    }
}

/*   underscored e underscoredAll: 
     - deixa a escrita dos dados em "caixa baixa" e sepadaros por "_"

     - exemplo:

        - sem underscored: UsersProducts

        - com underscored: users_products
*/
