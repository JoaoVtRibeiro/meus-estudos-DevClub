/* 
    5a. Crie 5 objetos nesse formato:
    { nome: "" idade:"" sexo:"" profissão: "" nacionalidade:"" }

    Ao rodar o programa, deve imprimir se a pessoa é aprovada ou não no processo,
    a pessoa deve ser maior de idade e brasileira para ser aprovada.
    
*/

const person1 = {nome: "Maria", idade:26, sexo:"feminino", profissão: "cozinheira", nacionalidade:"brasileira"}

const person2 = {nome: "Rodolfo", idade:28, sexo:"masculino", profissão: "professor", nacionalidade:"brasileira"}

const person3 = {nome: "José", idade:12, sexo:"masculino", profissão: "estudante", nacionalidade:"brasileira"}

const person4 = {nome: "Natalie", idade:23, sexo:"feminino", profissão: "bibliotecaria", nacionalidade:"canadense"}

const person5 = {nome: "Jaime", idade:36, sexo:"masculino", profissão: "eletricista", nacionalidade:"espanhol"}


const verification = person1

if (verification.idade >= 18 && verification.nacionalidade === "brasileira"){
    console.log(`${verification.nome} está aprovado(a) no processo!`)
} else if (verification.idade < 18){
    console.log(`${verification.nome} não está aprovado(a), não é permitido menores de idade.`)
} else {
    console.log(`${verification.nome} não está aprovado(a), sua nacionalidade não é brasileira.`)
}

