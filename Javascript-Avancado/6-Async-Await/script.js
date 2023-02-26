// Main
const convertFrom = document.querySelector('#convert-from') // Converter de (primeiro select)
const convertTo = document.querySelector('#convert-to') // Converter para (segundo select)
const valueSent = document.querySelector('#value-sent') // Valor enviado no input
const convertButton = document.querySelector('#convert-button') // Botão

// Section - A ser convertido
const flagConvertFrom = document.querySelector('#flag-convert-from') // Bandeira
const captionConvertFrom = document.querySelector('#caption-convert-from') // Legenda
const valueConvertFrom = document.querySelector('#value-convert-from') // Valor 

// Section - Convertido
const flagConvertTo = document.querySelector('#flag-convert-to') // Bandeira
const captionConvertTo = document.querySelector('#caption-convert-to') // Legenda
const valueConvertTo = document.querySelector('#value-convert-to') // Valor

// Conversão de valor
const currentConvert = async () => {

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())

    const conversionRateReal = {
        "US$ Dólar americano": data.USDBRL.high,
        "€ Euro": data.EURBRL.high,
        "₿ Bitcoin": data.BTCBRL.high
    }

    const conversionRate = conversionRateReal[convertTo.value]
    const result = valueSent.value / conversionRate

    console.log(data)

    if (convertFrom.value === "R$ Real brasileiro") {
        valueConvertFrom.innerHTML = new Intl.NumberFormat('pt-BR', { style: "currency", currency: "BRL" }).format(valueSent.value)

        switch (convertTo.value) {
            case "US$ Dólar americano":               
                valueConvertTo.innerHTML = new Intl.NumberFormat('US', { style: "currency", currency: "USD" }).format(result)
                break;

            case "€ Euro":             
                flagConvertTo.src = "./assets/euro.png"
                captionConvertTo.innerHTML = "Euro"
                valueConvertTo.innerHTML = new Intl.NumberFormat('eu-EU', { style: "currency", currency: "EUR" }).format(result)
                break;

            case "₿ Bitcoin":
                flagConvertTo.src = "./assets/bitcoin.png"
                captionConvertTo.innerHTML = "Bitcoin"
                valueConvertTo.innerHTML = new Intl.NumberFormat('en-US', { style: "currency", currency: "BTC" }).format(result)
                break;
        }
    }
}

convertButton.addEventListener('click', currentConvert)

// Alteração de imagem e caption
convertTo.addEventListener('change', () => {
    if (convertFrom.value === "R$ Real brasileiro") {
        flagConvertFrom.src = "./assets/brazil-flag.png"
        captionConvertFrom.innerHTML = "Real"

        switch (convertTo.value) {
            case "US$ Dólar americano":
                flagConvertTo.src = "./assets/usa-flag.png"
                captionConvertTo.innerHTML = "Dólar Americano"
                break;

            case "€ Euro":
                flagConvertTo.src = "./assets/euro.png"
                captionConvertTo.innerHTML = "Euro"
                break;

            case "₿ Bitcoin":
                flagConvertTo.src = "./assets/bitcoin.png"
                captionConvertTo.innerHTML = "Bitcoin"
                break;
        }

        currentConvert()
    }
})

/* 
    Comando para fazer com que resultados tenham formatos de diferentes tipos de moedas:
    
    new Intl.NumberFormat('região', {style : "currency", currency : "sigla da moeda"}).format(resultado)
*/


