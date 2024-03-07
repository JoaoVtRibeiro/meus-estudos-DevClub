//let apiKey =  

function displayOnScreen(data){
    
}

async function searchCity(city) {
    let apiData = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" + // Endereço da Api
        city + // Nome da Cidade
        "&appid=" + apiKey + // Verificador da chave + chave
        "&lang=pt_br" + // Idioma das informações
        "&units=metric" // Por padrão as unidades vem em kelvin, metric converte para celsius
    )
    .then(response => response.json())

    displayOnScreen(apiData)
}

function getCityName() {
    let inputCityName = document.querySelector("input").value

    searchCity(inputCityName)
}