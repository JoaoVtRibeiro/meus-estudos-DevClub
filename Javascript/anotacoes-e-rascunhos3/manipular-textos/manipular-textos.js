/* 
    Manipular textos

    É possivel alterar textos com as propriedades:

    - .innerText
    - .textContent
    - .innerHTML (Com esse, também é possivel inserir tags html)

*/

const title1 = document.querySelector("h1")

const title2 = document.querySelector("h2")

const paragraph = document.querySelector("p")


title1.innerText = "Primeiro titulo alterado"

title2.textContent = "Segundo titulo alterado"

paragraph.innerHTML = "<i>O texto alterado para itálico</i>"