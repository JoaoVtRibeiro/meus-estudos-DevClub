/* 
    10a. Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. 
    Porém, os dois nomes devem estar em dois objetos separados. 
    Ex: const object1 = {name:"João"}, object2 = {name:"Maria"}. João e João, imprime true. João e Maria, imprime false.

    10b. Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. 
    Porém, os dois nomes devem estar em um objeto. 
    Ex: const object1 = {firstName:"João", seccondName:"Maria"}. João e João, imprime true. João e Maria, imprime false.
*/

// Exercicio A

    let object1 = {
        name:"João"
    }

    let object2 = {
        name:"Maria"
    }

    console.log("Resposta do exercicio A:")
    console.log(object1.name == object1.name)
    console.log(object1.name == object2.name)

// Exercicio B

    let object3 = {
        firstName:"João",
        seccondName:"Maria"
    }

    console.log("Resposta do exercicio B:")
    console.log(object3.firstName == object3.firstName)
    console.log(object3.firstName == object3.seccondName)





