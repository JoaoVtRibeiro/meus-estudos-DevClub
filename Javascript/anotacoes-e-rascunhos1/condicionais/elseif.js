/* 
    Else If

    Adiciona mais opções de verificações no condicional if

*/

const temperature = 40

if (temperature >= 36 && temperature <= 39){
    console.log("A pessoa está saudável")
} else if(temperature > 39){ 
    console.log("A pessoa está doente com mais de 39 graus")
} else{
    console.log("A pessoa está doente com menos de 36 graus")
}

