import React, { useEffect, useState } from 'react'

import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'

import { CardProduct } from '../../components'
import ProductsBanner from '../../assets/products-banner.png'
import { Container, ProductsImg, CategoriesMenu, CategoryButton, ProductsContainer } from './styles'

export function Products({ location: { state } }) {

    // categoria selecionada e sendo redirecionada da Home
    let categoryIdFromHome = 0 // 0 porque começa ativo na categoria "todas"
    if (state?.categoryId) { // '?' Elvis Operator: Permite que o fluxo da aplicação continue se o valor for undefined (Caso não houvesse, a aplicação quebraria) 
        categoryIdFromHome = state.categoryId
    }

    const [categories, setCategories] = useState([])
    const [activeCategory, setActiveCategory] = useState(categoryIdFromHome) 
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])

    useEffect(() => {
        // Importação das categorias
        async function loadCategories() {
            const { data } = await api.get('categories') // apenas o "data" é necessário dos atributos do objeto

            const addAllCategories = [{ id: 0, name: 'Todas' }, ...data]

            setCategories(addAllCategories)
        }

        // Importação dos produtos e formatação de seus preços
        async function loadProducts() {
            const { data: allProducts } = await api.get('products') // data: allProducts, alteração do nome data -> allProducts (para ficar mais descritivo)

            const productsWithFormatedPrice = allProducts.map(product => { // Formatando todos o valores de preço de uma vez (Melhorar a Performace)
                return { ...product, formatedPrice: formatCurrency(product.price) } //...product = espalhando todos os atributos de product e adicionando um novo (criando um novo objeto)
            })

            setProducts(productsWithFormatedPrice)
        }

        loadCategories()
        loadProducts()

    }, [])

    // Filtragem dos produtos por categoria
    useEffect(() => {
        if (activeCategory === 0) { // 0 = categoria "todas"
            setFilteredProducts(products) // Todos os produtos serão mostrados
        } else {
            const addFilteredProducts = products.filter(
                product => product.category_id === activeCategory
            )

            setFilteredProducts(addFilteredProducts) // Apenas os produtos filtrados pela respectiva categoria serão mostrados
        }
    }, [activeCategory, products])

    return (
        <Container>
            <ProductsImg src={ProductsBanner} alt="banner da página" />
            <CategoriesMenu>
                {categories && categories.map(category => (
                    <CategoryButton type="button"
                        key={category.id}
                        isActiveCategory={activeCategory === category.id}
                        onClick={() => { setActiveCategory(category.id) }} // () => {} / função anônima para evitar que setActive seja chamado quando o botão for renderizado e sim só quando for clicado
                    >
                        {category.name}
                    </CategoryButton>
                ))}
            </CategoriesMenu>
            <ProductsContainer>
                {filteredProducts && filteredProducts.map(product => (
                    <CardProduct key={product.id} product={product} />
                ))}
            </ProductsContainer>
        </Container >
    )
}