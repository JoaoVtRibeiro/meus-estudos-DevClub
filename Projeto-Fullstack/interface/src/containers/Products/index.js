import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'

import ProductsLogo from '../../assets/products-logo.svg'
import { CardProduct } from '../../components'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import {
    Container,
    ProductsImage,
    CategoryButton,
    CategoryMenu,
    ProductsContainer
} from './styles'

export function Products({ location: { state } }) {
    // categoria selecionada e sendo redirecionada da Home
    let categoryId = 0 // 0 porque começa ativo na categoria "todas"
    // '?' Elvis Operator: Permite que o fluxo da aplicação continue se o valor for undefined (Caso não houvesse, a aplicação quebraria)
    if (state?.categoryId) {
        categoryId = state.categoryId
    }

    const [categories, setCategories] = useState([])

    const [products, setProducts] = useState([])

    const [filteredProducts, setFilteredProducts] = useState([])

    const [activeCategory, setActiveCategory] = useState(categoryId)

    // Importação das categorias
    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('categories') // apenas o "data" é necessário dos atributos do objeto

            const newCategory = [{ id: 0, name: 'Todas' }, ...data]

            setCategories(newCategory)
        }

        // Importação dos produtos e formatação de seus preços
        async function loadProducts() {
            const { data: allProducts } = await api.get('products') // data: allProducts, alteração do nome data -> allProducts (para ficar mais descritivo)

            // Formatando todos o valores de preço de uma vez (Melhorar a Performace)
            const newProducts = allProducts.map(product => {
                // ...product = espalhando todos os atributos de product e adicionando um novo (criando um novo objeto)
                return {
                    ...product,
                    formatedPrice: formatCurrency(product.price)
                }
            })

            setProducts(newProducts)
        }

        loadProducts()
        loadCategories()
    }, [])

    // Filtragem dos produtos por categoria
    useEffect(() => {
        // 0 = categoria "todas"
        if (activeCategory === 0) {
            setFilteredProducts(products) // Todos os produtos serão mostrados
        } else {
            const newFilteredProducts = products.filter(
                product => product.category_id === activeCategory
            )

            setFilteredProducts(newFilteredProducts) // Apenas os produtos filtrados pela respectiva categoria serão mostrados
        }
    }, [activeCategory, products])

    return (
        <Container>
            <ProductsImage src={ProductsLogo} alt="Imagem de um hamburguer" />

            <CategoryMenu>
                {categories &&
                    categories.map(category => (
                        <CategoryButton
                            type="button"
                            key={category.id}
                            isActiveCategory={activeCategory === category.id}
                            onClick={() => {
                                setActiveCategory(category.id) // () => {}  função anônima para evitar que setActive seja chamado quando o botão for renderizado e sim só quando for clicado
                            }}
                        >
                            {category.name}
                        </CategoryButton>
                    ))}
            </CategoryMenu>
            <ProductsContainer>
                {filteredProducts &&
                    filteredProducts.map(product => (
                        <CardProduct key={product.id} product={product} />
                    ))}
            </ProductsContainer>
        </Container>
    )
}

Products.propTypes = {
    location: PropTypes.object
}
