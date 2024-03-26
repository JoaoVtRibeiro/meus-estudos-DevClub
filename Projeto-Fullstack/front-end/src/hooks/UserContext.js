// Lembrar de olhar a documentação, caso aja duvida na estrutura
import React, { createContext, useContext, useState, useEffect } from 'react'

import PropTypes from 'prop-types'

const UserContext = createContext({})

export const UserProvider = ({ children }) => { // Provedor, aquele que tem a responsabilidade de ficar com os dados
    const [userData, setUserData] = useState({}) // useState "{}" porque irá receber em objeto

    const putUserData = async userInfo => { // Função responsavel por pegar os dados do usuario e colocar dentro do state
        setUserData(userInfo)

        await localStorage.setItem('codeburger:userData', JSON.stringify(userInfo)) // Gravação dos dados localmente, stringify = passando os dados para string (localStorage apenas aceita strings)
    }

    const logout = async () => {
        await localStorage.removeItem('codeburger:userData')
    }

    useEffect(() => { // Inicia juntamente com a aplicação
        const loadUserData = async () => {
            const clientInfo = await localStorage.getItem('codeburger:userData') // Recuperação dos dados gravados localmente

            if (clientInfo) { // Se houver algum dado gravado, já fica disponivel
                setUserData(JSON.parse(clientInfo)) // Retornando os dados ao seu formato de objeto
            }
        }

        loadUserData()
    }, [])

    return (
        <UserContext.Provider value={{ putUserData, userData, logout }}> {/* Tudo que está em "value" fica exposto para toda a aplicação */}
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => { // Responsavel por disponibilizar os dados e funções para o resto da aplicação (no caso, putUserData e userData)
    const context = useContext(UserContext)

    if (!context) { // Erro caso o valor chegue nulo
        throw new Error('useUser must be used with UserContext')
    }

    return context
}

UserProvider.propTypes = {
    children: PropTypes.node
}


/* Caminho dos dados (login)

    - Usuario informa seus dados no input e ativa a função "onSubmit" ao clicar no botão (Login/index.js)
    - api.post acessa o banco, confirma o acesso e trás todos os dados desse usuario 
    - putUserData recebe esses dados e passa para o state (userData), além de gravar localmente (localStorage)
    -> UserProvider -> value (<UserContext.Provider>) -> useUser -> Toda a aplicação tem acesso
    
    Lembrando: putUserData e userData estão sendo passados para useUser (value) para Login/index.js

    putUserData -> pegar os dados desse arquivo e passar para o state

    userData -> pegar esses dados e fazer a transferencia para outros arquivos

*/

