import mongoose from 'mongoose' // Equivante ao Sequelize (SQL), para o MongoDB

export async function setupMongo(): Promise<void> { // Função para configurar o mongoose / conexão com o banco de dados
    try {
        if (mongoose.connection.readyState === 1) { // readyState já é do próprio moongose, quando o banco está conectado à aplicação, o status será 1
            return // return vazio apenas para cancelar qualquer execução posterior/ a baixo (já que se ele já estiver conectado, não é necessário fazer mais nada)
        }

        console.log('🎲 Connecting to DB...') // Mensangem enquanto não conecta

        await mongoose.connect(process.env.MONGO_URL as string) // Conexão ao bando + obs no final do arquivo
        console.log('✔ DB Connected!') // Aviso de Conectado
    } catch {
        throw new Error('❌ DB not connected') // Aviso de Falha na conexão
    }
}


/* 
    Obs: await mongoose.connect(process.env.MONGO_URL as string)

    Tipagem

        - process.env é uma tipagem do node (o typescript não entende por si só)
        - MONGO_URL é uma variavel de ambiente
        - Para acessar variaveis de ambiente, o node precisa de um pacote de tipagens do node
        - Para instalar a pacote = npm i -D @types/node, para utilizar os recursos nativos do node e o typescript conseguir entendelos

        Basicamente, esse pacote vai permitir o typescript entender esses tipagens, assim dando acesso ao node para utilizalas

    Para acessar as variaveis de ambiente
        - npm i dotenv, uma biblioteca para acessar as variaveis de ambiente

    as string
        - A variavel de ambiente pode vir como string ou undefined, se ela vier undefined o banco não irá conectar,
          então colocando 'as string' faz o typescript assumir que será utilizado apenas a tipagem de string

*/