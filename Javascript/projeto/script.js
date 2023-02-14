// Main
const convertFrom = document.querySelector('#convertFrom') // Converter de (primeiro select)
const convertTo = document.querySelector('#convertTo') // Converter para (segundo select)
const convertButton = document.querySelector('#convertButton') // Botão

// Section - A ser convertido
const flagToConvert = document.querySelector('#flagToConvert') // Bandeira
const captionToConvert = document.querySelector('#captionToConvert') // Legenda
const valueToConvert = document.querySelector('#valueToConvert') // Valor 

// Section - Convertido
const flagConverted = document.querySelector('#flagConverted') // Bandeira
const captionConverted = document.querySelector('#captionConverted') // Legenda
const valueConverted = document.querySelector('#valueConverted') // Valor

const currentConvert = () => {
    const valueSent = document.querySelector('#valueSent') // Valor enviado no input

    let result = 0

    if(convertFrom.value === "R$ Real brasileiro"){

        flagToConvert.src = "./assets/brazil-flag.png"
        captionToConvert.innerHTML = "Real"
        valueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {style : "currency", currency : "BRL"}).format(valueSent.value)

        switch(convertTo.value){
            case "US$ Dólar americano":
                result = valueSent.value / 5
                flagConverted.src = "./assets/usa-flag.png"
                captionConverted.innerHTML = "Dólar Americano"
                valueConverted.innerHTML = new Intl.NumberFormat('en-US', {style : "currency", currency : "USD"}).format(result)
                break;
            case "€ Euro":
                result = valueSent.value / 6
                flagConverted.src = "./assets/euro.png"
                captionConverted.innerHTML = "Euro"
                valueConverted.innerHTML = new Intl.NumberFormat('eu-EU', {style : "currency", currency : "EUR"}).format(result)
                break;
            case "₿ Bitcoin":
                result = valueSent.value / 115.000
                flagConverted.src = "./assets/bitcoin.png"
                captionConverted.innerHTML = "Bitcoin"
                valueConverted.innerHTML = new Intl.NumberFormat('en-US', {style : "currency", currency : "BTC"}).format(result)
                break;
        }
    }     
}

convertButton.addEventListener('click', currentConvert)

convertTo.addEventListener('change', currentConvert)

/* 
    Comando para fazer com que resultados tenham formatos de diferentes tipos de moedas:
    
    new Intl.NumberFormat('região', {style : "currency", currency : "sigla da moeda"}).format(resultado)
*/


