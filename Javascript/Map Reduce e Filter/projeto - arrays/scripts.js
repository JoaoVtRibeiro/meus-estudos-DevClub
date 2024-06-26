import { menuOptions } from './products.js'

const showAllButton = document.getElementById("show-all")
const discountButton = document.getElementById("discount")
const someAllButton = document.getElementById("some-all")
const veganButton = document.getElementById("vegan")
const ul = document.querySelector("ul")

showAllButton.addEventListener("click", function () {
    ul.innerHTML = ''

    menuOptions.forEach((product) => {
        const li = document.createElement("li")
        const img = document.createElement("img")
        const title = document.createElement("p")
        const price = document.createElement("p")

        img.src = product.src
        title.innerHTML = product.name
        price.innerHTML = `R$ ${product.price},00`

        li.appendChild(img)
        li.appendChild(title)
        li.appendChild(price)
        ul.appendChild(li)
    })
})

