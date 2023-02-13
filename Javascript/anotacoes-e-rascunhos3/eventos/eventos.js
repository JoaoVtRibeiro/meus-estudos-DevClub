/* 
    Eventos

    Com o javascript, é possivel fazer com que aconteça certas ações no site conforme os
    eventos entre a interação do usuario e da interface, como por exemplo um clique em um
     botão ou passar o mouse em cima de um elemento.

    Há duas formas de fazer isso acontecer:
    
 */

// Tipo de evento ser definido no html e chamar a função no javacript
const clickAlert = () =>{
    alert("Alerta ativado!")
}

// Fazer uma variavel ter como valor o elemento html e assim definir a ação do evento no proprio javascript

const inputHtml = document.querySelector('input')

inputHtml.oninput = () => {
    console.log("tecla pressionada")
}