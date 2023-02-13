/* 
    Propriedades de eventos

    Além poder determinar uma ação para um evento, também é possivel acessar suas propriedades e valores

*/

const letter = document.querySelector('#letter')

letter.oninput = (event) => {
    console.log(event.data) // Acesso a letra digitada no input
}

const text = document.querySelector('#text')

text.oninput = (event) => {
    console.log(event.target.value) // Acesso ao valor completo digitado no input
}