import React, { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext({})

export const CartProvider = ({ children }) => { // Provedor, aquele que tem a responsabilidade de ficar com os dados
    const [cartProducts, setCartProducts] = useState([]) // useState "[]" porque irá receber em array

    const putProductInCart = async product => { // Função responsavel por pegar os dados do carrinho e colocar dentro do state
        const cartIndex = cartProducts.findIndex(prd => prd.id === product.id)

        let newCartProducts = []
        if (cartIndex >= 0) {
            newCartProducts = cartProducts

            ++newCartProducts[cartIndex].quantity

            setCartProducts(newCartProducts)
        } else {
            product.quantity = 1
            newCartProducts = [...cartProducts, product] // Lembrete: variaveis são sincronas, estado do react são asincronas, por isso o resultado desse variavel não está no setCartProducts
            setCartProducts(newCartProducts)
        }

        await localStorage.setItem('codeburger:cartInfo', JSON.stringify(newCartProducts))
    }

    const increaseProducts = async productId => {
        const newCartProducts = cartProducts.map(product => {
            return product.id === productId ? { ...product, quantity: product.quantity + 1 } : product
        })

        setCartProducts(newCartProducts) // Atualizando o carrinho para sessão atual do usuário

        await localStorage.setItem('codeburger:cartProducts', JSON.stringify(newCartProducts)) // Gravando localmente para uma sessão futura do usuausuáriorio
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
        <CartContext.Provider value={{ putProductInCart, cartProducts, increaseProducts }}> {/* Tudo que está em "value" fica exposto para toda a aplicação */}
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => { // Responsavel por disponibilizar os dados e funções para o resto da aplicação (no caso, putProductInCart e receivedCartProducts)
    const context = useContext(CartContext)

    if (!context) { // Erro caso o valor chegue nulo
        throw new Error('useCart must be used with UserContext')
    }

    return context
}