import React, { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext({})

export const CartProvider = ({ children }) => { // Provedor, aquele que tem a responsabilidade de ficar com os dados
    const [receivedCartProducts, setCartProducts] = useState([]) // useState "[]" porque irá receber em array

    const takeCartData = async product => { // Função responsavel por pegar os dados do carrinho e colocar dentro do state
       
    }

    useEffect(() => { // Inicia juntamente com a aplicação
        const loadCardProducts = async () => {
            const localCardProducts = await localStorage.getItem('codeburger:cardProducts') // Recuperação dos dados gravados localmente

            if (localCardProducts) { // Se houver algum dado gravado, já fica disponivel
                setCartProducts(JSON.parse(localCardProducts)) // Retornando os dados ao seu formato de objeto
            }
        }

        loadCardProducts()
    }, [])

    return (
        <CartContext.Provider value={{ takeCartData, receivedCartProducts }}> {/* Tudo que está em "value" fica exposto para toda a aplicação */}
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => { // Responsavel por disponibilizar os dados para o resto da aplicação
    const context = useContext(CartContext)

    if (!context) { // Erro caso o valor chegue nulo
        throw new Error('useCart must be used with UserContext')
    }

    return context
}