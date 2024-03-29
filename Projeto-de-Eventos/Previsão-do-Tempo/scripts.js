let key = "cebcd482eda57fa9a6714c1c2ba91885" // key do rodolfo

function displayOnScreen(data){
    
    document.querySelector("h2").innerHTML = "Tempo em " + data.name
    document.querySelector("#temp").innerHTML = Math.floor(data.main.temp) + "°C"
    document.querySelector("#icon").src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png" 
    document.querySelector("#description").innerHTML = data.weather[0].description
    document.querySelector("#humidity").innerHTML = "Humidade: " + data.main.humidity + " %"
   
    console.log(data)
}

async function searchCity(city) {
    let apiData = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" + // Endereço da Api
        city + // Nome da Cidade
        "&appid=" + key + // Verificador da chave + chave
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