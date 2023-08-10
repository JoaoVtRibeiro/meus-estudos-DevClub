// Lembrar de olhar a documentação, caso aja duvida na estrutura
import React, { createContext, useContext, useState, useEffect } from 'react'

const UserContext = createContext({})

export const UserProvider = ({ children }) => { // Provedor, aquele que tem a responsabilidade de ficar com os dados
    const [receivedUserData, setUserData] = useState({})

    const takeUserData = async userInfo => { // Função responsavel por pegar os dados do usuario e colocar dentro do state
        setUserData(userInfo)

        await localStorage.setItem('codeburger:userData', JSON.stringify(userInfo)) // Gravação dos dados localmente, stringify = passando os dados para string (localStorage apenas aceita strings)
    }

    useEffect(() => { // Inicia juntamente com a aplicação
        const loadUserData = async () => {
            const localUserData = await localStorage.getItem('codeburger:userData') // Recuperação dos dados gravados localmente

            if (localUserData) { // Se houver algum dado gravado, já fica disponivel
                setUserData(JSON.parse(localUserData)) // Retornando os dados ao seu formato de objeto
            }
        }

        loadUserData()
    }, [])

    return (
        <UserContext.Provider value={{ takeUserData, receivedUserData }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => { // Responsavel por disponibilizar os dados para o resto da aplicação
    const context = useContext(UserContext)

    if (!context) { // Erro caso o valor chegue nulo
        throw new Error('useUser must be used with UserContext')
    }

    return context
}


/* Caminho dos dados (login)

    - Usuario informa seus dados no input e ativa a função "onSubmit" ao clicar no botão (Login/index.js)
    - api.post acessa o banco, confirma o acesso e trás todos os dados desse usuario 
    - takeUserData recebe esses dados e passa para o state (receivedUserData), além de gravar localmente (localStorage)
    -> UserProvider -> value (<UserContext.Provider>) -> useUser -> Toda a aplicação tem acesso
    
    Lembrando: takeUserData e receivedUserData estão sendo passados para useUser (value) para Login/index.js

    takeUserData -> pegar os dados desse arquivo e passar para o state

    receivedUserData -> pegar esses dados e fazer a transferencia para outros arquivos

*/

