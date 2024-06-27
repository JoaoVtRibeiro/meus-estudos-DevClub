import { menuOptions } from './products.js'

const showAllButton = document.getElementById('show-all')
const discountButton = document.getElementById('discount')
const someAllButton = document.getElementById('some-all')
const veganButton = document.getElementById('vegan')
const ul = document.querySelector('ul')

// Mostrar todos os produtos
showAllButton.addEventListener('click', function () {
    ul.innerHTML = ''
    let li = '' // a li precisa desse '' para não iniciar undefined, estando undefined o forEach irá criar uma li vazia no primeiro valor
    
    menuOptions.forEach(product => {
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
})

// Mostrar todos os produtos com 10% de desconto
discountButton.addEventListener('click', function () {
    ul.innerHTML = ''
    let li = ''
    let priceDiscount


    menuOptions.map(product => {
        priceDiscount = product.price - (product.price/10)

        li += `
            <li>
                <img src="${product.src}">
                <p>${product.name}</p>
                <p class="price">${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(priceDiscount)}</p>
            </li>
        `

        ul.innerHTML = li
    })
})

