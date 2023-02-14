/* 
    Event Listener

    Como o próprio nome diz, ele é um ouvinte de eventos, 
    pode executar uma função quando um evento determinado for "escutado".

    Obs: Torna mais pratico em casos que a função seja algo especifico para 
    aquele elemento que a função esteja dentro do "addEventListener"

    Se a função é utilizada mais de uma vez para outros elementos, 
    é melhor que esteja fora e seja chamada ao vez.
*/

const title = document.querySelector('h1')
const button = document.querySelector('button')
const select = document.querySelector('select')
const input = document.querySelector('input')

// Efeito hover (CSS) em javascript
title.addEventListener('mouseenter', () => {
    title.style.color = "red"
    title.style.cursor = "pointer"
    title.style.display = "inline"
})

title.addEventListener('mouseleave', () => {
    title.style.color = "Initial"
})

// Alerta
button.addEventListener('click', () => {
    alert('O botão foi clicado')
})

// Função dentro do Event Listener 
select.addEventListener('change', () => { // É ativado a cada mudança
    console.log(select.value)
})


// Função fora do Event Listener e sendo chamada

const inputValue = () => {
    console.log(input.value)
 }

input.addEventListener('input', inputValue)

