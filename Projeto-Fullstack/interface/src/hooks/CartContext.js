import PropTypes from 'prop-types'
import React, { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext({})

export const CartProvider = ({ children }) => {
    // Provedor, aquele que tem a responsabilidade de ficar com os dados
    const [cartProducts, setCartProducts] = useState([]) // useState "[]" porque irá receber em array

    const updateLocalStorage = async products => {
        await localStorage.setItem(
            'codeburger: cartInfo',
            JSON.stringify(products)
        )
    }

    // Função responsavel por pegar os dados do produto e colocar dentro do state/carrinho
    const putProductInCart = async product => {
        const cartIndex = cartProducts.findIndex(prd => prd.id === product.id)

        let newCartProducts = []
        // Caso esse produto já existir no carrinho, irá aumentar a quantidade (página dos produtos)
        if (cartIndex >= 0) {
            newCartProducts = cartProducts

            newCartProducts[cartIndex].quantity =
                newCartProducts[cartIndex].quantity + 1

            setCartProducts(newCartProducts)
        } else {
            product.quantity = 1
            newCartProducts = [...cartProducts, product] // Lembrete: variaveis são sincronas, estado do react são asincronas, por isso o resultado desse variavel não está no setCartProducts
            setCartProducts(newCartProducts)
        }

        await updateLocalStorage(newCartProducts)
    }

    // Deletar o produto
    const deleteProducts = async productId => {
        const newCart = cartProducts.filter(product => product.id !== productId)

        setCartProducts(newCart)

        await updateLocalStorage(newCart)
    }

    //  Aumentar a quantidade do produto (página do carrinho)
    const increaseProducts = async productId => {
        const newCart = cartProducts.map(product => {
            return product.id === productId
                ? { ...product, quantity: product.quantity + 1 } // adicionando 1 na quantidade atraves do id recebido
                : product
        })

        setCartProducts(newCart) // Atualizando o carrinho para sessão atual do usuário

        await updateLocalStorage(newCart) // Gravando localmente para uma sessão futura do usuário
    }

    //  Diminuir a quantidade do produto
    const decreaseProducts = async productId => {
        const cartIndex = cartProducts.findIndex(pd => pd.id === productId)

        // Só será possivel diminuir a quantidade se for maior que 1
        if (cartProducts[cartIndex].quantity > 1) {
            const newCart = cartProducts.map(product => {
                return product.id === productId
                    ? { ...product, quantity: product.quantity - 1 }
                    : product
            })

            setCartProducts(newCart) // Atualizando o carrinho para sessão atual do usuário

            await updateLocalStorage(newCart) // Gravando localmente para uma sessão futura do usuário
        } else {
            deleteProducts(productId)
        }
    }

    // Carregar a informações do carrinho
    useEffect(() => {
        // Inicia juntamente com a aplicação
        // Recuperação dos dados gravados localmente
        const loadUserData = async () => {
            const clientCartData = await localStorage.getItem(
                'codeburger: cartInfo'
            )

            // Se houver algum dado gravado, já fica disponivel
            if (clientCartData) {
                setCartProducts(JSON.parse(clientCartData)) // Retornando os dados ao seu formato de objeto
            }
        }

        loadUserData()
    }, [])

    // Tudo que está em "value" fica exposto para toda a aplicação
    return (
        <CartContext.Provider
            value={{
                putProductInCart,
                cartProducts,
                increaseProducts,
                decreaseProducts
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

// Responsavel por disponibilizar os dados e funções para o resto da aplicação (no caso, putProductInCart, cartProducts, increaseProducts e decreaseProducts)
export const useCart = () => {
    const context = useContext(CartContext)

    // Erro caso o valor chegue nulo
    if (!context) {
        throw new Error('useCart must be used with UserContext')
    }

    return context
}

CartProvider.propTypes = {
    children: PropTypes.node
}
