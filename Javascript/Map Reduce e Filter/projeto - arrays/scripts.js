import { menuOptions } from './products.js'

const showAllButton = document.getElementById('show-all')
const discountButton = document.getElementById('discount')
const someAllButton = document.getElementById('sum-all')
const veganButton = document.getElementById('vegan')
const ul = document.querySelector('ul')

// Função "principal" que recebe a array modificada e mostra na tela
function showAll(productArray) {
    ul.innerHTML = '' // "limpa" a tela do array anterior para não ficar 2 ou mais juntos na tela
    let li = '' // a li precisa desse '' para não iniciar undefined, estando undefined o forEach irá criar uma li vazia no primeiro valor

    productArray.forEach(product => {
        // += para adicionar um novo, e não sobre escrever (myli = myli + `...`)
        li += `
            <li>
                <img src="${product.src}">
                <p>${product.name}</p>
                <p class="price">${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}</p>
            </li>
        `

        ul.innerHTML = li
    })
}

// Array dos produtos sem nenhuma modificação
showAllButton.addEventListener('click', () => {
    showAll(menuOptions)
})

// Array com 10% de desconto
discountButton.addEventListener('click', () => {
    ul.innerHTML = ''
    let li = ''

    const menuWithDiscount = menuOptions.map(product => ({
        ...product,
        price: product.price - (product.price / 10),
    }))

    showAll(menuWithDiscount)
})

// Mensagem que mostra soma de todos os preços
someAllButton.addEventListener('click', () => {
    const finalValue = menuOptions.reduce((acc, product) => acc + product.price, 0)

    ul.innerHTML = `
        <li>
            <p>A soma de todos os itens do menu é: ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(finalValue)}</p>
        </li>
    `
})

// Array que mostra apenas os veganos
veganButton.addEventListener('click', () => {
    const veganFilter = menuOptions.filter(product => product.vegan)

    showAll(veganFilter)
})

