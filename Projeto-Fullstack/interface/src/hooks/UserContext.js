// Lembrar de olhar a documentação, caso aja duvida na estrutura
import PropTypes from 'prop-types'
import React, { createContext, useContext, useState, useEffect } from 'react'

const UserContext = createContext({})

// Provedor, aquele que tem a responsabilidade de ficar com os dados
export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState({}) // useState "{}" porque irá receber em objeto

    // Função responsavel por pegar os dados do usuario e colocar dentro do state
    const putUserData = async userInfo => {
        setUserData(userInfo)

        // Gravação dos dados localmente, stringify = passando os dados para string (localStorage apenas aceita strings)
        await localStorage.setItem(
            'codeburger: userData',
            JSON.stringify(userInfo)
        )
    }

    const logout = async () => {
        await localStorage.removeItem('codeburger: userData')
    }

    // Inicia juntamente com a aplicação
    useEffect(() => {
        const loadUserData = async () => {
            // Recuperação dos dados gravados localmente
            const clientInfo = await localStorage.getItem(
                'codeburger: userData'
            )

            // Se houver algum dado gravado, já fica disponivel
            if (clientInfo) {
                setUserData(JSON.parse(clientInfo)) // Retornando os dados ao seu formato de objeto
            }
        }

        loadUserData()
    }, [])

    // Tudo que está em "value" fica exposto para toda a aplicação
    return (
        <UserContext.Provider value={{ putUserData, userData, logout }}>
            {children}
        </UserContext.Provider>
    )
}

// Responsavel por disponibilizar os dados e funções para o resto da aplicação (no caso, putUserData, userData e logout)
export const useUser = () => {
    const context = useContext(UserContext)

    if (!context) {
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
