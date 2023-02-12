/* 
    Selectionando Elementos:

        - getElementById : Trás apenas um elemento (element)
        - getElementByClassName : Trás diversos elementos (HTML Collection)
        - getElementByTagName : Trás diversos elementos (HTML Collection)
          
        - getElementByName : Trás os elementos com o nome selecionado (NodeList)
        - querySelector : Trás apenas um elemento, o primeiro que encontrar (element)
        - querySelector : Trás TODOS os elementos que encontrar (NodeList)
            Obs: No querySelector é necessário colocar id ou class como no css .(class) #(id)
            
    - NodeList x HTML Collection
        O querySelector, diferente dos "Html collection", pode ser tratado como uma array
*/

// HTML Collection
const title = document.getElementById("title") // Retorna um elemento pela id
const paragraph = document.getElementsByClassName("paragraph") // Retorna varios elementos pela classe
const tag = document.getElementsByTagName("p") // Retorna todos os elementos da tag

console.log(title)
console.log(paragraph)
console.log(tag)

// NodeList
const inputHtml = document.getElementsByName("input-html") // Retorna todos os elementos equivalente ao nome
const firstParagraph = document.querySelector(".paragraph") // Retorna o primeiro que encontrar equivalente a id, class, tag
const allParagraph = document.querySelectorAll("p") // Retorna todos os elementos equivalente a id, class, tag

console.log(inputHtml)
console.log(firstParagraph)
console.log(allParagraph)

// NodeList x HTML Collection, querySelector percorrido com forEach como uma array

allParagraph.forEach(paragraph => {
    console.log(paragraph)
})