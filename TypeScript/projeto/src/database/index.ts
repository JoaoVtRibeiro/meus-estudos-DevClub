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


*/