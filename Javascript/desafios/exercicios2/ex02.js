/* 
    2. Faça um programa que verifica se uma pessoa é brasileira ou não. 
    
    // DEVE SER UM OBJETO
*/

let user = {
    name: "fulano",
    age: 31,
    nationality: "espanhola"
}

let verification = user.nationality === "brasileira" ? "A pessoa é brasileira" : "A pessoa não é brasileira"

console.log(verification)