import axios from 'axios'

const apiCodeBurger = axios.create({
    baseURL: 'http://localhost:3001'
})

apiCodeBurger.interceptors.request.use(async config => {
    const userData = await localStorage.getItem('codeburger: userData') // Acessando o localStorage (Dados gravados localmente)
    const token = userData && JSON.parse(userData).token // Passando os dados de string para objeto e pegando o token ("userData &&"" = só vai executar essa ação SE o userData existir, para não quebrar a aplicação em páginas que não precisam do token)

    config.headers.authorization = `Bearer ${token}` // Passando o token para headers.authorization (Aonde fica a verificação do token)
    return config
})

export default apiCodeBurger
